

/***  Nivell 1  ***/

//===========================  FORMULARI CERCA  ================================/

function validateSearchField(){ 
    let formSearch = document.getElementById('searchField');

    if(formSearch.value == "") {
		document.getElementById("searchField").placeholder = "Camp obligatori";
    }
    else if(formSearch.value.length < 3){
        document.getElementById("searchField").value = ""; 
        document.getElementById("searchField").placeholder = "Mínim 3 caràcters";
    }
}

//===========================  FORMULARI LOGIN  ================================/

const logForm = document.getElementById('loginFormId');

function loginValidate() {
	let acumErrores = 0;
    logForm.classList.remove('is-invalid');
    let inputEmail = document.getElementById('inputEmail');
    let inputPassword = document.forms["loginForm"]["inputPassword"];
    
    if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Camp obligatori";
        acumErrores ++;
    }
    else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Format incorrecte";
		acumErrores ++;
	}
    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Camp obligatori";
		acumErrores ++;
    }
    if (acumErrores > 0){
        return false;
    }else{
		return true;
    }  
}

logForm.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

//===========================  FORMULARI REGISTRE  ================================/

const regForm = document.getElementById('registerFormId');

function registerValidate(){

    let acumErrores = 0;
    regForm.classList.remove('is-invalid');
    let inputEmailReg  = document.forms["registerForm"]["emailRegistre"];
    let inputPassword1 = document.forms["registerForm"]["newPassword"];
    let inputPassword2 = document.forms["registerForm"]["repeatPassword"];
    let inputProvincia = document.forms["registerForm"]["inputProvincia"];

    if(inputEmailReg.value == "") {
		inputEmailReg.classList.add("is-invalid");
		document.getElementById("errorEmailR").textContent = "Camp obligatori";
        acumErrores ++;
    }else if(!validar_email(inputEmailReg.value)){
		inputEmailReg.classList.add("is-invalid");
		document.getElementById("errorEmailR").textContent = "Format incorrecte";
        acumErrores ++;
        console.log(inputEmailReg.value);
	}
    if(inputPassword1.value == "") {
		inputPassword1.classList.add("is-invalid");
		document.getElementById("errorPasswordR").textContent = "Camp obligatori";
		acumErrores ++;
    }else{
        if(!checkPassword(inputPassword1.value)){
            inputPassword1.classList.add("is-invalid");
            document.getElementById("errorPasswordR").textContent = "La contrasenya ha de contenir una majúscula, un número i 8 caràcters com a mínim";
            acumErrores ++;
        }
    }
    if(inputPassword2.value == "") {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPasswordRepeat").textContent = "Camp obligatori";
		acumErrores ++;
    }
    if(inputPassword1.value !== inputPassword2.value){
        inputPassword2.classList.add("is-invalid");
        document.getElementById("errorPasswordRepeat").textContent = "La contrasenya no cioncideix";
        acumErrores ++;
    }
    if(inputProvincia.value == ""){
        inputProvincia.classList.add("is-invalid");
        document.getElementById("errorProvincia").textContent = "La provincia és obligatoria";
        acumErrores ++;
    }  
    if (acumErrores > 0){
        return false;
    }else{
		return true;
    }
}
regForm.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

//===========================  VALIDAR EMAIL   ================================/

function validar_email(email) {
	let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

/***  Nivell 2 ***/

//===========================  VALIDAR CONTRASENYA REGISTRE  ================================/


function checkPassword(password){
    let i = 0, mayuscula = false, minuscula = false, numero = false;

    if(password.length >= 8){
        for(i = 0; i < password.length; i++){
            if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90){
                mayuscula = true;
            }
            else if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122){
                minuscula = true;
            }
            else if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
                numero = true;
            }
            else{
                return false;
            }
        }
        if(mayuscula == true && minuscula == true && numero == true){
            return true;
        }
    }
    return false;
}
