$(document).ready(function(){

    var d = new Date();
    var mois = d.getMonth()+1;
    var jour = d.getDate();
    var année = d.getFullYear();
    var jourcourant = jour + '/' + mois + '/' + année;
    
        $("#bday").datepicker({
            dateFormat: "dd/mm/yy",
            maxDate: "jourcourant"
    
    });
    });