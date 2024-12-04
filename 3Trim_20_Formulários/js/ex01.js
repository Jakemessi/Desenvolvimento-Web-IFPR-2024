function somar(){
    var n1,n2,r
    n1 = parseFloat(document.getElementById("primeirovalor").value)
    n2 = parseFloat(document.getElementById("segundovalor").value)
    r = n1+n2
    document.getElementById("resultado").innerHTML = `O resultado da soma é ${r}`
    /* document.write("<p>"+r+"</p>") */
}