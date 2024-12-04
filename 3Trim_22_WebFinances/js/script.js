// Função para salvar um novo registro
function salvarRegistro(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const data = document.getElementById('data').value;

    if (nome && valor && data) {
        const novoRegistro = { nome, valor, data };
        const registros = JSON.parse(localStorage.getItem('registrosFinanceiros')) || [];
        registros.push(novoRegistro);
        // Salvar novamente no localStorage
        localStorage.setItem('registrosFinanceiros', JSON.stringify(registros));
        
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        
        listagemRecente();

        // Limpar os campos
        document.getElementById('nome').value = '';
        document.getElementById('valor').value = '';
        document.getElementById('data').value = '';

    }
}
// Configurar o evento do formulário
document.getElementById('formcadastro').addEventListener('submit', salvarRegistro);

function listagemRecente() {
    const nome = document.getElementById('nome').value;
    const cavalo = parseFloat(document.getElementById('valor').value);
    const data = document.getElementById('data').value;
    const lista = document.getElementById('listarecente');

    const li = document.createElement('li');
        li.innerHTML = `
            <span>${nome} - R$ ${cavalo.toFixed(2)} - ${data}</span>
        `;
        lista.appendChild(li);
}