// get all inputs and buttons 
const resultElement = document.getElementById("result");
const lengthElement = document.getElementById("length");
const upperCaseElement = document.getElementById("uppercase");
const lowerCaseElement = document.getElementById("lowercase");
const numberElement = document.getElementById("number");
const symbolElement = document.getElementById("symbol");
const generateElement = document.getElementById("generate");
const clipboardElement = document.getElementById("clipboard");

// create keys for all the getRandom fuctions
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// add an event listener to the clipboard button and add copy functionality
clipboardElement.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
    const password = resultElement.innerText;

    if(!password){
        return
    }

// creates a textArea with the password in it, which is the selected, copied and the the textArea is removed
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    //document.execCommand("copy"); exec.Command is deprecated
    navigator.clipboard.writeText(textArea.value);
    textArea.remove();
    alert("Copied");
})

// add click listener to generateElement and declares values to be used in the generatePasword function
generateElement.addEventListener("click", () => {
    const length = +lengthElement.value;
    const hasLower = lowerCaseElement.checked;
    const hasUpper = upperCaseElement.checked;
    const hasNumber = numberElement.checked;
    const hasSymbol = symbolElement.checked;

// set result of function to show up in the resultElement
    resultElement.innerText = generatePasword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// takes in previously declared constants as arguments and returns the finalPassword
function generatePasword(lower, upper, number, symbol, length){
    let generatedPassword = "";

    // counts how many checkboxes are checked 
    const typesCount = lower + upper + number + symbol;

    // filters out the unchecked boxes and uses the fuction keys created in the randomFunc object
    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(key => Object.values(key)[0]);

    // returns empty string as password if nothing is checked
    if(typesCount === 0){
        return "";
    }

    // takes the values from the typesArray and loops through each of them, assigning their keys to funcName, calling randomFunc with funcName as the index and appending the results generatedPassword
    for(let i = 0; i < length; i += typesCount){
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}


// getRandom functions 
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
