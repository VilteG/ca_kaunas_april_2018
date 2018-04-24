let cities=[];

//cities.push("Jonava");
//cities.push("Palanga");
//cities.push("Utena");
//cities.push("Taurage");
//cities.push("Plunge");



function test() {    
    let newCity=document.getElementById("txt_city").value
    cities.push(newCity);
    //document.getElementById("result").innerText=cities;
    printCities(cities);

    let val_city = $("#txt_city").val();

    if(val_city) {
		$("#result").html("");
		$("#val_city").removeClass("is-invalid");
	} else {
		$("#result").html("<h3>Laukelis yra tuscias</h3>");
		$("#val_city").addClass("is-invalid");
	}
    }




function printCities(cities){
    h="";
for (let i=0; i < cities.length; i++){
    
    h =h+"<div><h3 class='pretty'>"+cities[i]+"</h3></div>"; //String aggrergation
}
document.getElementById("result").innerHTML=h;

}

