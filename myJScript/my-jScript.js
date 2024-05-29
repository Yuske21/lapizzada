/********************************************* */
const panelLogin = document.querySelector("#panelLogin");

/* */
var inputUser = document.getElementById('user');
var inputPass = document.getElementById('pass');    

var userMsg = document.getElementById('userMsg');
var passMsg = document.getElementById('passMsg');

function validationLogin(event){        

    if(inputUser.value === ''){
        userMsg.style = 'display: block;';
        inputUser.style = 'border: 1px solid red;';
        inputUser.style = 'background-color: #e94848;';
        inputUser.focus();
        event.preventDefault();
    }else if(inputPass.value === ''){
        passMsg.style = 'display: block;';
        inputPass.style = 'border: 1px solid red;';
        inputPass.style = 'background-color: #e94848;';
        inputPass.focus();              
        event.preventDefault();
    }else {
        const panelLogueo = document.querySelector(".panel-Login");
        panelLogueo.style.display = "none";

        const panelSuccess = document.createElement("div");
        panelSuccess.classList.add("panel-login-success");
        panelSuccess.innerHTML = `<div class="panel-title-login font1">
                Iniciando Sesion... 
                <i class="fa-solid fa-spinner fa-spin-pulse"></i>
            </div>`;
        
        panelLogin.append(panelSuccess);

        // Redirigir a la página principal después de 3 segundos
        setTimeout(() => {
            window.location.href = "../index.html?User=" + inputUser.value;
            ; // Reemplaza con la URL de tu página principal
        }, 3000);
        
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
            passMsg.style = 'display: none;';
            inputPass.style = 'border-color: black;'
        }        
    });
});