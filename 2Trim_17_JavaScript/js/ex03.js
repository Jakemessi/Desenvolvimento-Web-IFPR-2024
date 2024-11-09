/* Variáveis  */
var frase
frase="Hoje há previsão de termos ventos de mais de 100 km/h"
alert(frase)

/* Operação de soma em JS */
var v1, v2, soma

v1=45
v2=55
soma=v1+v2
alert("O resultado da soma é: "+soma)
/* Exibindo o resultado em HTML */
document.write("<h2>"+soma+"</h2>")

/* Operação com valores digitados pelo usuário */
v1=prompt("Entre com o valor: ")
v2=prompt("Entre com outro valor: ")
/* As variáveis recebidas são do tipo string e precisam ser convertidas para tipo numérico */
soma=parseInt(v1)+parseInt(v2)
alert(soma)