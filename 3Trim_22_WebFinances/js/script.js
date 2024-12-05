// Função para salvar um novo registro
function salvarRegistro(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const data = document.getElementById('data').value;
    const categoria = document.getElementById('categoria').value;

    if (nome && valor && data) {
        const novoRegistro = { nome, valor, data, categoria };
        const registros = JSON.parse(localStorage.getItem('registrosFinanceiros')) || [];
        registros.push(novoRegistro);
        // Salvar novamente no localStorage
        localStorage.setItem('registrosFinanceiros', JSON.stringify(registros));

        listagemRecente();

        // Limpar os campos
        document.getElementById('nome').value = '';
        document.getElementById('valor').value = '';
        document.getElementById('data').value = '';
        document.getElementById('categoria').value = 0;

    }
}
// Configurar o evento do formulário
document.getElementById('formcadastro').addEventListener('submit', salvarRegistro);

function listagemRecente() {
    const nome = document.getElementById('nome').value;
    const cavalo = parseFloat(document.getElementById('valor').value);
    const data = document.getElementById('data').value;
    const categoria = document.getElementById('categoria').value;
    const lista = document.getElementById('listarecente');
    /* Serve para apagar o registro anterior */
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    const li = document.createElement('li');
        li.innerHTML = `
            <span>${categoria} - ${nome} - R$ ${cavalo.toFixed(2)} - ${data}</span>
        `;
        lista.appendChild(li);
}