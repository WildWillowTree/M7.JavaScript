/***** Nivell 1 *****/

/**** Exercici 1 ****/

console.log("Hola mundo");

/**** Exercici 2 ****/

//alert("Em dic Helena!");

/**** Exercici 3 ****/

let nom = "Helena", cognom= "Polo";

console.log(nom + " " + cognom);

/**** Exercici 4 ****/

let a = 34, b = 56, suma = a + b;

console.log("La suma entre " + a + " i " + b + " és " + suma);

/**** Exercici 5 ****/

function notaExamen(){

    let nota_examen = parseFloat(document.getElementById("nota-ex").value);

    if(nota_examen < 5){
        alert("Ohh has suspés l'exàmen amb un " + nota_examen);
    }else{
        alert("felicitats has aprovat amb un " + nota_examen);
    }
}

/**** Exercici 6 ****/

let text = "Tinc un cotxe de color verd", nouText = new String;

nouText = text.replace("verd", "blau");

console.log(text);
console.log(nouText);
console.log(nouText.replaceAll("o", "u"));

/**** Exercici 7 ****/

let obj = ['taula', 'cadira', 'ordinador', 'llibreta'];

for(let i=0; i < obj.length; i++){
    console.log("L'objecte " + obj[i] + " està a la posició " + i);
}

/**** Exercici 8 ****/

function resultado(){
    let simbolo = document.getElementById("operador").value;
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    calculadora(simbolo, valor1, valor2);
}

function calculadora(simbolo,valor1,valor2){
    let resultado;

    switch (simbolo){
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        default: resultado = "error";
    }
    document.getElementById("resultado").innerHTML = "El resultat és: " + resultado.toString();
}

/**** Nivell 2 ****/

function mostrarResultado(){
    let operacion = document.getElementById("operacion").value;//Recoger valor de un input text
    let num1 = document.getElementById("num1").value;//Recoger valor de un input text
    let num2 = document.getElementById("num2").value;//Recoger valor de un input text

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    let resultat;

    switch (operacion){
        case "+":
            resultat = num1 + num2;
            break;
        case "-":
            resultat = num1 - num2;
            break;
        case "*":
            resultat = num1 * num2;
            break;
        case "/":
            if((operando2 == 0) || (operando1 == 0 && operando2 == 0)){
                resultat = "error";
            }else{
                resultat = num1 / num2;
            }  
            break;
        default:
            resultat = "error";
    }

    document.getElementById("mostrarResultado").innerHTML = "El resultat és: " + resultat;
}

/**** Nivell 3 ****/

let operador = "", operando1 = 0, operando2 = 0; 

function darNumero(numero){
    if(operando1 == 0 && operando1 !== '0.'){
        operando1 = numero;
    }else{
        operando1 += numero;
    }
    resetear();
}
function operar(valor){
    if(operando1 == 0){
        operando1 = parseFloat(document.getElementById("valor_numero").value);
    }
    operando2 = parseFloat(operando1);
    operando1 = 0;
    operador = valor;
}
function esIgual(){
    operando1 = parseFloat(operando1);
    switch(operador){
        case '+':
            operando1 += operando2;
            break;
        case '-':
            operando1 = operando2 - operando1;
            break;
        case '*':
            operando1 *= operando2;
            break;
        case '/':
            operando1 = operando2 / operando1;
            break;
        default:
            operando1 = "error";
    }
    resetear();
    operando2 = parseFloat(operando1);
    operando1 = 0;
}
function limpiar(){
    operando1 = 0;
    operando2 = 0;
    resetear();
}
function resetear(){
    document.getElementById("valor_numero").value = operando1;
} 