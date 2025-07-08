// a)

function suma1(a, b){
    result = a + b;
    return result;
}

var resultsuma = suma1(2,5);
console.log(`${resultsuma}`);

// b)

function suma2(a, b){
    
    if(isNaN(a) || isNaN(b)){
        alert("Uno de los parametros no es un numero.");
        return NaN;
    }

    result = a + b;
    return result;
}

console.log(suma2(3,"a"));

// c)

function validateInteger(a){
    if(!isNaN(a) && Number.isInteger(a)){
        return true;
    }
    else{
        return false;
    }
}

console.log(validateInteger(5.3));

// d)

function suma3(a, b){
    
    if(isNaN(a) || isNaN(b)){
        alert("Uno de los parametros no es un numero.");
        return NaN;
    }

    if(!Number.isInteger(a)){
        alert(`El numero ${a} no es entero.`);
        return Math.round(a);
    }

    if(!Number.isInteger(b)){
        alert(`El numero ${b} no es entero.`);
        return Math.round(b);
    }

    result = a + b;
    return result;
}

console.log(suma3(5,7.2));

// e)

function suma4(a, b){
    
    if(isNaN(a) || isNaN(b)){
        alert("Uno de los parametros no es un numero.");
        return NaN;
    }

    result = isInteger(a) + isInteger(b);
    return result;
}

function isInteger(a){
    if(!Number.isInteger(a)){
        alert(`El numero ${a} no es entero.`);
        return Math.round(a);
    }
}

console.log(suma4(3.3,2.5));