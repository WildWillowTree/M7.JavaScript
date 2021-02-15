//////  Nivell 1  //////

/****  Exercici 1  ****/
function Ex1(){
console.log("*** Ex 1 ***");

let lletres = ["H","E","L","E","N","A"], i = 0;
for(i=0; i< lletres.length; i++){
    console.log(lletres[i]);
}
}
/****  Exercici 2  ****/
function Ex2(){
console.log("*** Ex 2 ***")

let nom = ["H","E","L","3","N","A"];
const vocals = ["A","E","I","O","U"];
const consonants = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];
const numeros = ["1","2","3","4","5","6","7","8","9","0"];
let match = false, j=0, k=0, l=0;

console.log("Partim del nom HEL3NA");
for(i = 0; i < nom.length; i++){
    match = false;
    for(j = 0; j < vocals.length; j++){
        if(nom[i] === vocals[j]){
            console.log("He trobat la vocal: " + vocals[j]);
            j = vocals.length;  
            match = true;  
        }
    }
    if(!match){
        for(k = 0; k < consonants.length; k++){
            match = false;
            if(nom[i] === consonants[k]){
                console.log("He trobat la consonant: " + consonants[k]);
                k = consonants.length;
                match = true;
            }
        }
    }
    if(!match){
        for(l = 0; l < numeros.length; l++){
            match = false;
            if(nom[i] === numeros[l]){
                console.log("Els noms de persones no contenen el número: " + numeros[l]);
                l = numeros.length;
                match = true;
            }
        }
    }
}
}
/****  Exercici 3  ****/
function Ex3(){
console.log("*** Ex 3 ***");


lletres = ["H","E","L","E","N","A"];
let lletresRepetides = lletres.reduce((contadorLLetra, lletra)=>{
    contadorLLetra[lletra] = (contadorLLetra[lletra] || 0) +1;
    return contadorLLetra;
},{});
console.log(lletresRepetides);
}
/****  Exercici 4  ****/
function Ex4(){
console.log("*** Ex 4 ***");

let firstname = ["H","E","L","E","N","A"];
let surname = ["P","O","L","O"];
firstname.push(" ");
let fullName = firstname.concat(surname);
console.log(fullName);
}

/****  Nivell 2  ****/
function Nivell2(){
console.log("*** Nivell 2 ***");

var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 

let emails = /[A-Z0-9.-]+@[A-Z0-9.\-\u00f1]+\.[A-Z]+/gmi;
let arrayEmails = str.match(emails);
let llistaMails = new Array();
i = 0, j = 0;

if(llistaMails.length == 0){
    llistaMails.push(arrayEmails[0]);
    console.log(llistaMails[i]); 
}
for(i = 0; i < arrayEmails.length; i++){
    for(j = 0; j < i; j++){
        if(arrayEmails[i] !== llistaMails[j]){
          if((i == arrayEmails.length) || (j == llistaMails.length -1)){
            llistaMails.push(arrayEmails[i]);
            console.log(llistaMails[i]); 
            }
        }
        else{
            j = i;
        }
    }  
}
}
/****  Exercici 5  ****/
console.log("*** Ex 5 ***");




