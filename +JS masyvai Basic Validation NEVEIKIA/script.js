let cities=[];


function test() {    

    let newCity=document.getElementById("txt_city").value
    cities.push(newCity);    
    printCities(cities);

    check();

    };


function printCities(cities){

    h="";
for (let i=0; i < cities.length; i++){

    h =h+"<div><h3 class='pretty'>"+cities[i]+"</h3></div>"; //String aggrergation
}
        document.getElementById("result").innerHTML=h;
};

function check(){

    let city = $("#txt_city").val();
   
	if(city) {
    $("#result").html("");
    		$("#city").removeClass("is-invalid");
	} else {
    		$("#result").html("<h3>Laukelis yra tuscias</h3>");
		$("#city").addClass("is-invalid");
	}
    
};

