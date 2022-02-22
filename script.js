const resultElement = document.getElementById("result");
const lengthElement = document.getElementById("length");
const upperCaseElement = document.getElementById("uppercase");
const lowerCaseElement = document.getElementById("lowercase");
const numberElement = document.getElementById("number");
const symbolElement = document.getElementById("symbol");
const generateElement = document.getElementById("generate");
const clipboardElement = document.getElementById("clipboard");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardElement.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
    const password = resultElement.innerText;

    if(!password){
        return
    }

    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    //document.execCommand("copy");
    navigator.clipboard.writeText(textArea.value);
    textArea.remove();
    alert("Copied");
})

generateElement.addEventListener("click", () => {
    const length = +lengthElement.value;
    const hasLower = lowerCaseElement.checked;
    const hasUpper = upperCaseElement.checked;
    const hasNumber = numberElement.checked;
    const hasSymbol = symbolElement.checked;

    resultElement.innerText = generatePasword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePasword(lower, upper, number, symbol, length){
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    
    if(typesCount === 0){
        return "";
    }

    for(let i = 0; i < length; i += typesCount){
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
    const symbols = "!@#$%^&*(){}[]=,./,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
