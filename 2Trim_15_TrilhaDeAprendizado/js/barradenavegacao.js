fetch('barradenavegacao.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#navbar");
    let newelem = document.createElement("header");
    newelem.id = "navegador"
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
/* <script type="text/javascript" src="js/barradenavegacao.js" id="navbar"></script> */