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