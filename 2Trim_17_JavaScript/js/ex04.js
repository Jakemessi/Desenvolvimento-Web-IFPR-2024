var resultado,n1,n2,sub
v1=prompt("Insira um número a ser subtraido: ")
v2=prompt("Insira outro número que corresponde ao valor que vai subtrair: ")

sub=parseFloat(v1)-parseFloat(v2)

resultado="A subtração resultou em "+sub
alert(resultado)

var v1,v2,v3,mult,resultado
v1=prompt("Insira um número a ser multiplicado: ")
v2=prompt("Insira mais um número a ser multiplicado: ")
v3=prompt("Insira mais um número a ser multiplicado: ")

mult=parseFloat(v1)*parseFloat(v2)*parseFloat(v3)
resultado="A multiplicação de 3 números equivale à "+mult
alert(resultado)

var v1,cub,resultado
v1=prompt("Insira um número a ser elevado ao cubo: ")

cub=parseFloat(v1)*parseFloat(v1)*parseFloat(v1)
resultado="O cubo de "+v1+" equivale a "+cub
alert(resultado)

var v1,ant,suc,resultado
v1=prompt("Insira um número a ser descoberto o antecessor e o sucessor: ")
ant=parseInt(v1)-1
suc=parseInt(v1)+1

resultado=ant+" e "+suc+" são respectivamente o antecessor e o sucessor de "+v1
alert(resultado)

var v1,v2,area,resultado
v1=prompt("Insira a base do triângulo em centimetros: ")
v2=prompt("Insira a altura do triângulo em centimetros: ")

area=(parseFloat(v1)*parseFloat(v2))/2
resultado="A área do triângulo equivale à "+area+"cm³"
alert(resultado)
