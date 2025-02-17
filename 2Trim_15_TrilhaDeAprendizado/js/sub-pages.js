function subpages(cavalo){
    const rodape = document.getElementById('rodape');
    const iniciobotao = document.getElementById('iniciobotao');
    const projetobotao = document.getElementById('projetobotao');
    const sobrebotao = document.getElementById('sobrebotao');
    const conteudosbotao = document.getElementById('conteudosbotao');
    if(cavalo == 'sub-pages/projeto.html'){
        rodape.style.display = "none";
        projetobotao.style.color = "white";
        iniciobotao.style.color = "darkgrey";
        sobrebotao.style.color = "darkgrey";
        conteudosbotao.style.color = "darkgrey";
    }
    else{
        rodape.style.display = "block";
    }
    if(cavalo == 'sub-pages/inicio.html'){
        iniciobotao.style.color = "white";
        projetobotao.style.color = "darkgrey";
        sobrebotao.style.color = "darkgrey";
        conteudosbotao.style.color = "darkgrey";
    }
    else if(cavalo == 'sub-pages/sobre.html'){
        sobrebotao.style.color = "white";
        iniciobotao.style.color = "darkgrey";
        projetobotao.style.color = "darkgrey";
        conteudosbotao.style.color = "darkgrey";
    }
    else if(cavalo == 'sub-pages/conteudos.html'){
        conteudosbotao.style.color = "white";
        iniciobotao.style.color = "darkgrey";
        projetobotao.style.color = "darkgrey";
        sobrebotao.style.color = "darkgrey";
    }
    fetch(cavalo)
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("main#main");
        let newelem = document.createElement("main");
        newelem.id = "main"
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem,oldelem);
    })
}/* <script type="text/javascript" src="js/sub-pages.js" id="main"></script> */