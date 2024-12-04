function enviar(){
    var nome, email, ok
    nome = document.getElementById("nome").value
    email = document.getElementById("email").value
    ok=false

    if(nome == ""){
        alert("O campo nome está vazio")
    }
    else if(nome.indexOf(" ")==-1){
        alert("O campo nome está incompleto, verifique se digitou o nome completo")
    }
    else if(email == "") {
        alert("O campo email está vazio")
    }
    else if(email.indexOf("@")==-1){
        alert("O campo email está incorreto, verifique se digitou o email correto")
    }
    else{
        alert(nome.value + " agradecemos o seu contato!")
        ok = true
    }
    return(ok)
}