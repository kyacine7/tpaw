
$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
    
            $(document).keyup(function(){

                valid = true ;
                if($("#nom").val().length < 5 ){
                    $("#nom").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#nom").css("border-color","#48DE14");
                }
                if($("#prenom").val().length < 5 ){
                    $("#prenom").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#prenom").css("border-color","#48DE14");
                }
                if($("#dn").val().length < 5 ){
                    $("#date").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#dn").css("border-color","#48DE14");
                }
                if($("#adresse").val().length < 5 ){
                    $("#adresse").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#adresse").css("border-color","#48DE14");
                }
                if($("#mail").val().length < 5 ){
                    $("#mail").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#mail").css("border-color","#48DE14");
                }

                return valid;

            });


    $("#formulaire").on("submit",function (event) { 
        event.preventDefault();
        
    
         if($("#nom").val() !== "" && $("#prenom").val() !== "" && $("#dn").val() !== "" 
         && $("#adresse").val() !== "" && $("#mail").val() !== "" ){
            
            $('#myModal').modal("show");
            $(".modal-title").html("Bienvenue "+ document.querySelector("#prenom").value);
           
           // $('.modal-body').html('\<a href="https://www.google.com/maps/place/Paris/@48.8587741,2.2069771,11z/data=!3m1!4b1!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219" \><img src="staticmap.png"/>\<\/a\>');
            $('.modal-body').html("Vous étes né le: "+ document.querySelector("#dn").value+
            "</br>Et vous Habitez à: "+ document.querySelector("#adresse").value
            +'</br><a href="https://maps.google.com/maps?q='
                                +document.querySelector("#adresse").value
                                +'"><img src="https://maps.googleapis.com/maps/api/staticmap?markers='
                                +document.querySelector("#adresse").value+'&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/></a>');
        }
        
    });
    

});