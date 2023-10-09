/*const nome = prompt("Escreva seu nome:");
alert("Boas vindas, " + nome);

const endereco = prompt("Qual nome da sua rua?")*/

/*var numero= 3;
var numeroB= 5;
var resultado= numero + numeroB;
console.log("A soma de " + numero + " + " + numeroB + " é igual à: " + resultado);

var digito1 = prompt("Digite um numero");
var digito2 = prompt("Digite outro numero");

var valor1 = parseFloat(digito1);
var valor2 = parseFloat(digito2);
var results = valor1 + valor2;

alert("A soma dos numeros digitados é de: " + results); */

/*var n1 = prompt("Digite um número.");
var n2 = prompt("Digite outro número");

var valorReal1 = parseFloat(n1);
var valorReal2 = parseFloat(n2);

var media = valorReal1 + valorReal2;
var divisor = media / 2;
alert("A média é: " + divisor );*/

/*var num= prompt("Digite um número");
var numReal= parseInt(num)
var resto = numReal % 2;

if (resto==0) {
    alert("Numero par")
}
else {h
    alert("Numero impar.");
}*/

/*var num1= prompt("Digite um numero");
var num1Real = parseInt(num1);

if (num1Real <0) {
    alert("Digite um numero válido.");
}
else {
    var fatorial = 1;
}

for (var f = 1; f <= num1Real; f++) {
    fatorial *= f;
}

alert("resultado: " + fatorial); */

/* var num = prompt("Digite um numero");
var num2= prompt("digite outro numero");
var numR= parseFloat(num);
var numR2= parseFloat(num2);

var divisao = numR % numR2;
var elevado = numR ** numR2;
alert("O resto da divisão é:" + divisao);
alert("a elevação deles é: " + elevado); */

/*var n1 = prompt('Digite a nota da AV1');
n1 = parseFloat(n1);

var n2 = prompt('Digite a nota da AV2');
n2 = parseFloat(n2);

var media = (n1 + n2) / 2;


if(media >= 5 && n1 > 0 && n2 > 0) {
    alert('Aprovado. Sua nota final é: ' + media)
} else {
    alert('Reprovado. Sua nota final é: ' + media)                                                                                                                                                                      
};*/

//fazer jogador 1 e 2 digitarmem um numero
/*var j1 = prompt('Jogador 1 digite um numero');
var j2 = prompt('Jogador 2 digite um numero');

j1 = parseInt(j1);
j2 = parseInt(j2);

//se forem iguais mostra empate 
if(j1 == j2) {
    alert('EMPATE')
}
else {
    //sortear um numero entre 0 e 1 
    var sorteado = parseInt(Math.random() * 2);
    alert("Numero sorteado foi: " + sorteado);
}



//se o numero sorteador for 0 ganha quem escreveu o menor numero 
/*if(sorteado === 0) {
    if(j1 < j2) {
        alert('Jogador 1 ganhou');
    } else {
        alert('Jogador 2 ganhou');
    }
}
    else {
        if(j1 > j2) {
            alert('Jogador 1 ganhou');
        }
        else {
            alert('Jogador 2 ganhou');
        }
    }
    
    //tambem pode ser feito da seguinte forma
    if((sorteado === 0 && j1 < j2) || (sorteado === 1 && j1 > j2)) {
        alert("Jogador 1 ganhou")
    }
    else {
        alert('Jogador 2 ganhou')
    }*/

/*var num = prompt('Digite um numero')
num = parseInt(num);

var indice = 1;

//o while é enquanto o indice for menor ou igual a 10, continuar o comando 
while(indice <=10){
document.write(num + ' x ' + indice + '=' + (num * indice) + '<br>');
 
//o indice tem o valor de 1, ao executar o codgio acima ele vem até aqui e soma +1 ao indice, fazendo o virar 
//2 e assim continuamente até que ele chega no 10 e ai ele para. 
indice = indice + 1;
}
document.write('Fim da tabela');*/

//pode ser feito com o for tambem
/* var num = prompt('Digite um numero')
 num = parseInt(num);

 for(i = 1; i <=10 ; i++)
 document.write(num + ' x ' + i + '=' + (num * i) + '<br>'); */

//adicionando tudo ao github 
//ano bissexto exercicio 

var ano = 1004

while (ano <= 2023) {
    if ((ano % 100 === 0) && (ano % 400 === 0)) {
        document.write(ano + ' Não é um ano bissexto<br>');
    } else {
        document.write(ano + '<br>');
    }
    ano += 4; 
}






