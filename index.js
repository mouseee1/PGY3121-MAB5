$(document).ready(function(){
    $("#correo").blur(function(){
        var settings = {
            "url": "https://api.hunter.io/v2/email-finder?domain=duocuc.cl&first_name=Alexis&last_name=Ohanian&api_key=e1a6a2b54bb8423ded29ae41931f22eeccdddd9d",
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
}




























    