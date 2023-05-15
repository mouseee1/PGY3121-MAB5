$(document).ready(function(){
    $("#correo").blur(function(){
        var settings = {
            "url": "https://verifier.meetchopra.com/verify/"+$("#correo").val()+"?token=92928b756e623357b3bd80e8dc90deae205ee3457bbc68f239a5cfbfb9d2d3e8772ec3561c6bc6bb75a4996f99b867d8",
            "method": "GET",
            "timeout": 0,
            "headers": {
              "Cookie": "connect.sid=s%3AysQxoLChy00Hyu092OEM_3VMe9Trwe1Z.wTzAGroElDlsqMwysfovAmhfePZO6eJlZAfVKf06Z3o"
            },
          };
          
        $.ajax(settings).done(function (data){
            if(data.status == true){
                alert("Correo Correcto");
            }
            else{
                alert("Correo Incorrecto");
            }
        });
    });
});