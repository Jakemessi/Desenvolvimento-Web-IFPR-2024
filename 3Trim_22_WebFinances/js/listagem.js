// Função para carregar os registros do localStorage
function carregarRegistros() {
    const registros = JSON.parse(localStorage.getItem('registrosFinanceiros')) || [];
    const lista = document.getElementById('listafinanceira');
    lista.innerHTML = ''; // Limpar a lista atual

    registros.forEach((registro, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${registro.nome} - R$ ${registro.valor.toFixed(2)} - ${registro.data}</span>
            <button onclick="removerRegistro(${index})">Remover</button>
        `;
        lista.appendChild(li);
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

// Carregar registros ao abrir a página
window.onload = carregarRegistros;
