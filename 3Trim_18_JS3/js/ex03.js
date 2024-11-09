/* var a = [4,8,3,5,9]
 Exibindo o array(vetor) inteiro 
alert(a)
 Exibe o valor 9 
alert(a[4])
Substituindo o valor 4 por 7 
a[0] = 7
alert(a)
percorrendo o array com laço de repetição
var CAVALO
for(cavalo=0;cavalo<a.length;cavalo++){
    document.write("<h2>"+a[cavalo]+"<\h2>")
} */

/* Arrays usados como lista */
lista=["Gervronelson","Estrada A", 1880,80.5,true]
alert(lista)
for(var i=0;i<lista.length;i++){
    document.write("<h2>"+lista[i]+"</h2>")
}
/* Adicionar item no final da lista */
lista.push("84500-000")
alert(lista)
/* Remover o último elemento da lista */
lista.pop()
alert(lista)
/* Remover primeiro elemento da lista */
lista.shift()
alert(lista)
/* Adicionar elemento no primeiro item da lista */
lista.unshift("Jeffreyson")
alert(lista)

/* Faça um programa que seja possível ao usuário inserir frutas em uma lista, item a item através de uma janela de diálogo. A inserção de itens deve encerrar-se quando o usuário digitar fim. Ao final deve ser apresentada a lista de frutas no documento html. Lembre-se de que a palavra fim não deve ser colocada na lista */