let checkOutput = document.querySelector('#lock');

let createButton = document.querySelector('#createBtn');

let keyOutput = document.querySelector('#key');

let keyGen = document.querySelector('#keyBtn');

let cheats = ['ASPIRINE' , 'HESOYAM' , 'UZUMYMW' , 'Mr.Boris' , 'Mr Boris'];

createButton.addEventListener('click', function(event){
    event.preventDefault();
    checkOutput.value = generatePin();
    createButton.disabled = true;    
});

keyGen.addEventListener('click', function(event){
event.preventDefault();
for(let i = 0; i<cheats.length; i++){
    if (keyOutput.value === cheats[i]){
        window.confirm('Sure you´re not a Robot?');
        window.location.href = "../main/main.html";
    }
};

keyOutput.value = generatePin();
if (checkOutput.value === keyOutput.value && checkOutput.value > null){
}
}); 

function generatePin(){
    const length = 4;
    let pin = '';
    for (let i = 0; i< length; i++){
        const digit = Math.floor(Math.random() * 10)
        pin += digit;
    }
console.log(pin);
    return pin;
};

keyOutput.addEventListener('input', function(event) {
    event.preventDefault();
    let inputvalue = keyOutput.value;
    inputvalue = inputvalue.replace(/[^a-zA-Z0-9.\s]/g, '');
    keyOutput.value = inputvalue;
});

