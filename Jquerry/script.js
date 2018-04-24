
//function btn_click (btn){    
//    let btnID = "";
 //   alert("Btn was clicked");
   // document.getElementById("").innerHTML = <h3> "+btnID+" was clicked</h3>;
//}

//$(".btn").click( function(){ 
// EVENT LIISTNER
//)}

$(".btn").click(function (){ //EVENT LISTNER
//let text = $(this).text();
//alert(text +"Button was clicked");
//$(this).text("I was clicked"); //PASIZIUREK, AWESOME! This kreipiasi i tiik paspausta elemennta
//$(this).fadeOut('slow');
$(this).fadeOut('slow').fadeIn(3000);

});

let GBP = 1.06;
let USD = 1.35;
let DKK = 3;

$("#convert").click(function() {
    let EUR =Number($("#eur").val());
    let OTHER = Number($("#valiutos").val());      

let converted = 0;
if (OTHER==GBP) {
    converted= EUR*GBP;
} else if (OTHER==USD) {
    converted = EUR*USD;
} else if (OTHER==DKK) {
    converted = EUR*DKK;
};

alert(converted);
$("#result").text(converted);

});

