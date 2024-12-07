function subpages(cavalo){
    const rodape = document.getElementById('rodape');
    if(cavalo == 'sub-pages/projeto.html'){
        rodape.style.display = "none";
    }
    else{
        rodape.style.display = "block";
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