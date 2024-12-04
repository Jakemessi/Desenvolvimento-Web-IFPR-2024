function enviar(){
    var nome, senha, ok
    nome = document.getElementById("nome").value
    senha = document.getElementById("senha").value
    ok=false

    if(nome == ""){
        alert("O campo nome está vazio")
    }
    else if(nome != "zezinho") {
        alert("O campo nome está incorreto")
    }
    else if(senha == "") {
        alert("O campo senha está vazio")
    }
    else if(senha != "1234abc") {
        alert("O campo senha está incorreto")
    }
    else{
        alert(nome + " agradecemos o seu contato!")
        ok = true
    }
    return(ok)
}