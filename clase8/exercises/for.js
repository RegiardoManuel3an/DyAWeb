// a)

var array = ["Camaron", "que", "se", "duerme", "se..."];
for (let palabra of array){
    alert(palabra)
}

// b)

var array = ["Camaron", "que", "se", "duerme", "se..."];
for (let palabra of array){
    modPalabra = palabra.substring(0,1).toUpperCase()+palabra.substring(1);
    alert(modPalabra)
}

// c)

var array = ["Camaron", "que", "se", "duerme", "se..."];
var sentence = "";

for (let palabra of array){
    sentence += palabra + " ";
}

alert(sentence);

// d)

var array = [];

for(i=0; i<10; i++){
    array.push(i);
}

console.log(array);