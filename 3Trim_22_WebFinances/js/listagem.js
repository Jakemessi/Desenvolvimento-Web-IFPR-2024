// Carregar registros ao abrir a página
window.onload = carregarRegistros;

// Função para carregar os registros do localStorage
function carregarRegistros() {
    const registros = JSON.parse(localStorage.getItem('registrosFinanceiros')) || [];
    const listaReceitas = document.getElementById('receitas');
    listaReceitas.innerHTML = ''; // Limpar a lista atual
    const listaDespesas = document.getElementById('despesas');
    listaDespesas.innerHTML = ''; // Limpar a lista atual

    registros.forEach((registro, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${registro.categoria} - ${registro.nome} - R$ ${registro.valor.toFixed(2)} - ${registro.data}</span>
            <button onclick="removerRegistro(${index})">Remover</button>
            <button onclick="editarRegistro(${index})">Editar</button>
        `;
        if(registro.categoria == "Despesa"){
            listaDespesas.appendChild(li);
        }
        else{
            listaReceitas.appendChild(li);
        }
    });
}

// Função para remover um registro
function removerRegistro(index) {
    const registros = JSON.parse(localStorage.getItem('registrosFinanceiros')) || [];
    registros.splice(index, 1);

    // Salvar novamente no localStorage
    localStorage.setItem('registrosFinanceiros', JSON.stringify(registros));

    carregarRegistros();
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

function aptr(){
    const lista = document.getElementById('receitas');
    /* Serve para apagar todos os registros de receitas*/
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
        lista.removeChild(lista.firstChild);
        removerRegistro(0)
    }
}
function aptd(){
    const lista = document.getElementById('despesas');
    /* Serve para apagar todos os registros de despesas*/
        lista.removeChild(lista.firstChild);
        removerRegistro(0)
}