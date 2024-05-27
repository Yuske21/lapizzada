/********************************************* */
var inputUser = document.getElementById('user');
var inputPass = document.getElementById('pass');    

var userMsg = document.getElementById('userMsg');
var passMsg = document.getElementById('passMsg');

function validationLogin(event){        

    if(inputUser.value === ''){
        userMsg.style = 'display: block;';
        inputUser.style = 'border: 1px solid red;'
        inputUser.focus();
        event.preventDefault();
    }else if(inputPass.value === ''){
        passMsg.style = 'display: block;';
        inputPass.style = 'border: 1px solid red;';
        inputPass.focus();              
        event.preventDefault();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    /*llama al form de login*/
    var fLogin = document.getElementById('formLogin')
    fLogin.addEventListener('submit', validationLogin);

    /*events*/
    inputUser.addEventListener('input', function() {
        if(inputUser.value.length >= 1){                        
            userMsg.style = 'display: none;';
            inputUser.style = 'border-color: black;'
        }        
    });
    
    inputPass.addEventListener('input', function() {
        if(inputPass.value.length >= 1){                        
            userMsg.style = 'display: none;';
            inputPass.style = 'border-color: black;'
        }        
    });
});