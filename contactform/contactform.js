
function contactForm(){

        var nombre = $("form #name").val();
        var email = $("form #email").val();
        var asunto = $("form #subject").val();
        var mensaje = $("form #message").val();

        var nombreValidated = false;
        var mailValidated = false;
        var asuntoValidated = false;
        var mensajeValidated = false;

        var emailValido=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


       if(nombre.length<4){
            $("#name-error").fadeIn();
            nombreValidated=false;
        }else{
            $("#name-error").fadeOut();
            nombreValidated=true;
        }

        if(email.length<3||email.search(emailValido)){
            $("#mail-error").fadeIn();
            mailValidated=false;                    
        }else{
            $("#mail-error").fadeOut();
            mailValidated=true;
        }


       if(asunto.length<4){
            $("#subject-error").fadeIn();
            asuntoValidated=false;
        }else{
            $("#subject-error").fadeOut();
            asuntoValidated=true;
        }


        if(mensaje.length<4){
            $("#msj-error").fadeIn();
            mensajeValidated=false;
        }else{
            $("#msj-error").fadeOut();
            mensajeValidated=true;
        }







        if(nombreValidated==true&&mailValidated==true&&asuntoValidated==true&&mensajeValidated==true){
      
            jq13.ajax({
                type: "POST",
                url: "contactform/mail.php",
                data: {nombre:nombre, email:email, asunto:asunto, mensaje:mensaje}, success: function(msg){
                    alert('EMAIL ENVIADO CON EXITO');
                    
                    
                }
            });
        }
}//function
