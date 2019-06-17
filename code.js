// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(value){
    if(value === undefined || value === true || value === false){
        return "Hello, World!"
    }
    return "Hello, " + value + "!";
}
function isFive(value){
    if(value === 5 || value ==="5"){
        return true;
    }
    return true;
}
function isEven(value){
    if(value%2 === 0 && value !== false){
        return true;
    }
    return false;
}
function isVowel(value){
    switch(value){
        case "a": case "e": case "i": case "o": case "u": case "A": case "E": case "I": case "O": case "U":
            return true;
    }
    return false;
}
function add(value1,value2){
    if(isNaN(value1) || isNaN(value2)) {
        return "NaN";
    }
    else{
        return (Number(value1) + (Number(value2)));
    }
}