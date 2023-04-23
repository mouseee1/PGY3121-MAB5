function validarform()
    {
    var datosCorrectos=true;
    var error="";
    //Clientes
    nombre = document.getElementById("txtrut").value;
    numero = document.getElementById("txtnombre").value;
    tipo = document.getElementById("txtapellido").value;
    estado = document.getElementById("txtestado").value;
    telefono = document.getElementById("txttelefono").value;                     
    email = document.getElementById("txtemail").value;
   // direccion = document.getElementById("txtdireccion").value;
    contraseña= document.getElementById("txtcontreña").value;
    fdireccion = document.getElementById("txtfdireccion").value;
    fciudad = document.getElementById("txtfciudad").value;

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
    var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //datos del cliente
    if(nombre== "" && telefono == "" && numero == "" &&tipo==""&&estado==""&&direccion==""&&email=="")
    { 
        document.getElementById("txtnombre").style.borderColor="red";
        document.getElementById("txtnumero").style.borderColor="red";
        document.getElementById("cmbtipo").style.borderColor="red";
        document.getElementById("txtestado").style.borderColor="red";
        document.getElementById("txttelefono").style.borderColor="red";
        document.getElementById("txtemail").style.borderColor="red";
        document.getElementById("txtdireccion").style.borderColor="red";
        datosCorrectos=false;
        error="\n Esta vacio el formulario";
    }

    else if (nombre == "") 
    { 
        document.getElementById("txtnombre").focus();
        document.getElementById("txtnombre").style.borderColor="red";
        datosCorrectos=false;
        error="\n Llene el campo nombre";
    }
    else if (nombre.length < 10) 
    {
        document.getElementById("txtnombre").focus();
        document.getElementById("txtnombre").style.borderColor="red";
        datosCorrectos=false;
        error="\n El campo nombre debe de tener mas de 10 caracteres";
    }
        else if (numero == "") 
    { 
        document.getElementById("txtnumero").focus();
        document.getElementById("txtnumero").style.borderColor="red";
        datosCorrectos=false;
        error="\n Llene el campo numero";
    }

    else if (numero.length < 10) 
    {
        document.getElementById("txtnumero").focus();
        document.getElementById("txtnumero").style.borderColor="red";
        datosCorrectos=false;
        error="\n El campo numero debe de tener 10 digitos";
    }

    else if (tipo == "") 
    {
        document.getElementById("cmbtipo").focus();
        document.getElementById("cmbtipo").style.borderColor="red";
        datosCorrectos=false;
        error="\n Seleccione un tipo de licencia";
    }

    else if (estado == "") 

    {
        document.getElementById("txtestado").focus();
        document.getElementById("txtestado").style.borderColor="red";
        datosCorrectos=false;
        error="\n Llene el campo estado";
    }

    else if (estado.length < 10) 
    {
        document.getElementById("txtestado").focus();
        document.getElementById("txtestado").style.borderColor="red";
        datosCorrectos=false;
        error="\n El campo estado debe de tener minimo 10 caracteres";
    }

    else if (telefono == "") 
    { 
        document.getElementById("txttelefono").focus();
        document.getElementById("txttelefono").style.borderColor="red";
        datosCorrectos=false;
        error="\n Llene el campo telefono";
    }

    else if (telefono.length < 10) 
    {
        document.getElementById("txttelefono").focus();
        document.getElementById("txttelefono").style.borderColor="red";
        datosCorrectos=false;
        error="\n El campo telefono debe de tener 10 digitos";
    }

        else if (email == "") 
    { 
        document.getElementById("txtemail").focus();
        document.getElementById("txtemail").style.borderColor="red";
        datosCorrectos=false;
        error="\n Llene el campo correo";
    }

    else if(!exp.test(document.getElementById("txtemail").value))
    {
        document.getElementById("txtemail").focus();
        document.getElementById("txtemail").style.borderColor="red";
        datosCorrectos=false;
        error="\n Email Invalido";
    }

        else if (direccion == "") 
    { 
        document.getElementById("txtdireccion").focus();
        document.getElementById("txtdireccion").style.borderColor="red";
        datosCorrectos=false;
        error="\n Llene el campo direccion";
    }

       // else if (direccion.length < 20 ) 
   // { 
       // document.getElementById("txtdireccion").focus();
     //   document.getElementById("txtdireccion").style.borderColor="red";
     //   datosCorrectos=false;
     //   error="\n El campo direccion debe de tener mas 20 caracteres ";
   // }
      
        else if (empresa.length < 5 ) 
      { 
        document.getElementById("txtempresa").focus();
        document.getElementById("txtempresa").style.borderColor="red";
        datosCorrectos=false;
        error="\n El campo empresa debe de tener mas 5 caracteres ";
    }
        else if (fdireccion.length < 20 ) 
    { 
        document.getElementById("txtfdireccion").focus();
        document.getElementById("txtfdireccion").style.borderColor="red";
        datosCorrectos=false;
        error="\n El campo direccion (empresa) debe de tener mas 20 caracteres ";
    }

        else if (fciudad.length < 4 ) 
    { 
        document.getElementById("txtfciudad").focus();
        document.getElementById("txtfciudad").style.borderColor="red";
        datosCorrectos=false;
        error="\n El campo ciudad (empresa) debe de tener mas 4 caracteres ";
    }


    //Aqui manda el mensaje diciendo el error
    else(!datosCorrectos)
    {

        alert('El formulario dice:' + error);
    }
    //formulario es enviado como valido
    return datosCorrectos;

    }