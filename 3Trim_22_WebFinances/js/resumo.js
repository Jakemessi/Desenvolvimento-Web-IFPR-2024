let grafico; // Referência ao gráfico para permitir atualizações

function carregarRegistros() {
    var total
    const tot = document.getElementById('resumo');

    const registros = JSON.parse(localStorage.getItem('registrosFinanceiros')) || [];
    const listaReceitas = document.getElementById('receitas');
    const listaDespesas = document.getElementById('despesas');
    listaReceitas.innerHTML = ''; // Limpar a lista atual
    listaDespesas.innerHTML = ''; // Limpar a lista atual

    const receitas = [];
    const despesas = [];

    registros.forEach((registro, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${registro.categoria} - ${registro.nome} - R$ ${registro.valor.toFixed(2)} - ${registro.data}</span>
            <button onclick="removerRegistro(${index})">Remover</button>
            <button onclick="editarRegistro(${index})">Editar</button>
        `;
        if (registro.categoria === "Despesa") {
            listaDespesas.appendChild(li);
            despesas.push(registro.valor); // Adiciona ao array de despesas
            total = total - registro.valor
        } else {
            listaReceitas.appendChild(li);
            receitas.push(registro.valor); // Adiciona ao array de receitas
            total = total + registro.valor
        }
    });
    
    if(total < 0 ){
        tot.innerHTML = `<p>Com base no total de suas transações, você está com uma divída de <span style="color: red;"">${total*-1}</span> reais.</p>`
    }
    else if(total == 0){
             tot.innerHTML = `<p>Com base nas transições registradas, você não está em situação de lucro mas pelo menos não está devendo também</p>`
    }
    else{
        tot.innerHTML = `<p>Com base no total de suas transações, você está com um lucro de <span style="color: green;">${total}</span> reais.</p>`
    }
    criarGrafico(receitas, despesas); // Cria ou atualiza o gráfico
}

function criarGrafico(receitas, despesas) {
    const ctx = document.getElementById('graficoBarras').getContext('2d');

    // Destroi o gráfico anterior (se existir) para criar um novo
    if (grafico) {
        grafico.destroy();
    }

    grafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Receitas', 'Despesas'],
            datasets: [
                {
                    label: 'Valores',
                    /* Reduce serve para ler o vetor/array. a serve para o valor inicial enquanto b o prévio, soma os 2 repetidamente até o final da lista, a soma vai acrescentando o valor da barra cujo inicialmente era 0*/
                    data: [receitas.reduce((a, b) => a + b, 0), despesas.reduce((a, b) => a + b, 0)],
                    backgroundColor: ['#4CAF50', '#F44336'], // Verde para receitas, vermelho para despesas
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true, /* Faz com que o gráfico ajuste automaticamente */
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

// Atualiza o gráfico com base no filtro selecionado
function atualizarGrafico() {
    const registros = JSON.parse(localStorage.getItem('registrosFinanceiros')) || [];
    const filtro = document.getElementById('filtro').value;

    const receitas = [];
    const despesas = [];

    registros.forEach((registro) => {
        if (registro.categoria === "Despesa") {
            despesas.push(registro.valor);
        } else {
            receitas.push(registro.valor);
        }
    });

    if (filtro === "receitas") {
        criarGrafico(receitas, []); // Mostra apenas receitas
    } else if (filtro === "despesas") {
        criarGrafico([], despesas); // Mostra apenas despesas
    } else {
        criarGrafico(receitas, despesas); // Mostra ambas
    }
}

function removerRegistro(index) {
    const registros = JSON.parse(localStorage.getItem('registrosFinanceiros')) || [];
    registros.splice(index, 1); // Remove o registro pelo índice
    localStorage.setItem('registrosFinanceiros', JSON.stringify(registros)); // Atualiza o localStorage
    carregarRegistros(); // Recarrega a lista e o gráfico
}

function editarRegistro(index) {
    const registros = JSON.parse(localStorage.getItem('registrosFinanceiros')) || [];
    const registro = registros[index];

    // Exibe os valores atuais em campos de entrada para edição
    const novoNome = prompt("Editar Nome:", registro.nome);
    const novoValor = parseFloat(prompt("Editar Valor:", registro.valor));
    const novaData = prompt("Editar Data:", registro.data);
    const novaCategoria = prompt("Editar Categoria (Receita/Despesa):", registro.categoria);

    // Atualiza o registro com os novos valores
    if (novoNome && !isNaN(novoValor) && novaData && novaCategoria) {
        registros[index] = {
            nome: novoNome,
            valor: novoValor,
            data: novaData,
            categoria: novaCategoria,
        };

        // Salva os registros atualizados no localStorage
        localStorage.setItem('registrosFinanceiros', JSON.stringify(registros));
        carregarRegistros();
    } else {
        alert("Edição cancelada ou valores inválidos!");
    }
}

// Carrega os registros ao carregar a página
window.onload = carregarRegistros;
