let passwordBox = document.getElementById('password');
let length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "@#$%&*(){}<>/[]";

const allChars = upperCase + lowerCase + number + symbol;


function createpasswerd(){
    let passwerd = '';
    passwerd += upperCase[Math.floor(Math.random()* upperCase.length)];
    passwerd += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    passwerd += number[Math.floor(Math.random()* number.length)];
    passwerd += symbol[Math.floor(Math.random()* symbol.length)];

    while(length > passwerd.length){
        passwerd += allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value = passwerd;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}