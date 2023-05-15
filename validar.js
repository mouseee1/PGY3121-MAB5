const form = document.getElementById('form');
const rut = document.getElementById('rut');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const direccion = document.getElementById('direccion');


form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const rutValue = rut.value.trim();
	const  nombreValue = nombre.value.trim();
	const apellidoValue = apellido.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const direccionValue = direccion.value.trim();

	if(rutValue === '') {
		setErrorFor(rut, ' no  puede dejar el rut en blanco');
        
	} else {
		setSuccessFor(rut);
	}


	if(nombreValue === '') {
		setErrorFor(nombre, 'No puede dejar el nombre en blanco');
        
	} else {
		setSuccessFor(nombre);
	}


	if(apellidoValue === '') {
		setErrorFor(apellido, 'No puede dejar el apellido en blanco');
        
	} else {
		setSuccessFor(apellido);
	}



	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	


	if(passwordValue === '') {
		setErrorFor(password, 'Password no debe ingresar en blanco.');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 no debe ingresar en blanco');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords no coinciden');
	} else{
		setSuccessFor(password2);
	}

    if(direccionValue === '') {
		setErrorFor(direccion, 'Username cannot be blank');
        
	} else {
		setSuccessFor(direccion);
	}
}



function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const invalid = formControl.querySelector('invalid');
	formControl.className = 'form-control error';
	invalid.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
var Fn = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto) {
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		return (Fn.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}


// Uso de la función
alert( Fn.validaRut('11111111-1') ? 'Valido' : 'inválido');