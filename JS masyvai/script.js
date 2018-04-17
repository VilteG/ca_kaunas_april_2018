let cities=[];

cities.push("Jonava");
cities.push("Palanga");
cities.push("Utena");
cities.push("Taurage");
cities.push("Plunge");



function test() {    
    let newCity=document.getElementById("txt_city").value
    cities.push(newCity);
    //document.getElementById("result").innerText=cities;
    printCities(cities);
}

function printCities(cities){
    h="";
for (let i=0; i < cities.length; i++){
    
    h =h+"<div><h3 class='pretty'>"+cities[i]+"</h3></div>"; //String aggrergation
}
document.getElementById("result").innerHTML=h;

}