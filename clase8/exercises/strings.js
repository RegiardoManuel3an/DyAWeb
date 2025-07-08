// a)

var string;
string = "El mondonguito";
upperString = string.toUpperCase();
console.log(`La frase '${string}' en mayuscula es '${upperString}'`);

// b)

var string;
string = "El mondonguito";
recortado = string.substring(0, 5);
console.log(`Las primeras 5 letras de la frase '${string}' son '${recortado}'`);

// c)

var string;
string = "El mondonguito 2";
final = string.substring(string.length-3);
console.log(`Los ultimos 3 caracteres de la frase '${string}' son '${final}'`);

// d)

var string;
string = "aSi Se EsCrIbIa En LoS 2010";
final = string.substring(0,1).toUpperCase()+string.substring(1).toLowerCase();
console.log(`Esto '${string}' escrito como una persona normal seria: '${final}'`);

// e)

var string;
string = "El mondongo 2: mas mondongos que nunca";
firstSpace = string.indexOf(" ");
console.log(`El primer espacio de la frase '${string}' se encuentra en la posicion '${firstSpace}'`);

// f)

var string = "galletitas artesanales";
var espacio = string.indexOf(" ");
var palabra1 = string.substring(0,espacio);
var palabra2 = string.substring(espacio);
var finalWord = palabra1.substring(0,1).toUpperCase()+palabra1.substring(1).toLowerCase()+palabra2.substring(1,2).toUpperCase()+palabra2.substring(2).toLowerCase();
console.log(`${string} ==> ${finalWord}`)
