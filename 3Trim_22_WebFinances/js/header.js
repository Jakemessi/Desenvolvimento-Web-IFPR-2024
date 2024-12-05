fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#navbar");
    let newelem = document.createElement("div");
    newelem.id = "navegador"
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})