
function validation() {

    var minlength=5;
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var dn = document.getElementById("dn");
    var adresse = document.getElementById("adresse");
    var mail = document.getElementById("mail");


    if( nom.value.length >= minlength && prenom.value.length >= minlength && dn.value.length >= minlength 
        && adresse.value.length >= minlength && mail.value.length >= minlength){
            document.getElementById('resultat').style.display='block';
            document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#prenom").value;
    }
    else{
            document.getElementById('error').style.display='block';
            document.getElementById("error").innerHTML = "Les champs doivent avoir minimum "+minlength+" caractéres";
    }
    }
