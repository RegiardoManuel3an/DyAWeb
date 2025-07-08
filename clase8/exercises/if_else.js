// a)

var randomNum = Math.random();
console.log(randomNum);
if(randomNum > 0.5) {
    alert("Greater than 0,5");
}
else alert("Lower than 0,5");

// b)

var Age = Math.floor(Math.random() * 101);
console.log(Age);
if(Age < 2){
    alert("Bebe");
}
else if(Age >= 2 && Age <= 12){
    alert("Niño");
}
else if(Age >= 13 && Age <= 19){
    alert("Adolescente");
}
else if(Age >= 20 && Age <= 30){
    alert("Joven");
}
else if(Age >= 31 && Age <= 60){
    alert("Adulto");
}
else if(Age >= 61 && Age <= 75){
    alert("Adulto Mayor");
}
else if(Age > 75){
    alert("Anciano");
}
