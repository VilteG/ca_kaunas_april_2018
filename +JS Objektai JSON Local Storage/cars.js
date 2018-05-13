//alert('JS veikia'); pasitikrink, ar veikia JS. jei JS objektas- kabutes, gali buti nepara6yta function

let CARS=[];

let r_CARS_string = localStorage.getItem("Carslist");// istraukiam masinas is local storage
console.log(r_CARS_string);
let CARS_returned = JSON.parse(r_CARS_string); // gaunam nebe stringa, o objekta
console.log(CARS_returned);

if (CARS_returned != null) {
       CARS = CARS_returned;
}


function reg(){

    let brand_text=document.getElementById('brand').value;  
    let model_text=document.getElementById('model').value;  
    let engine_number=Number(document.getElementById('engine').value);    
    let hp_number=Number(document.getElementById('hp').value);    

    let car = {        
        brand:brand_text,
        model:model_text,
        engine:engine_number,
        hp:hp_number,   //paskutiniam nereikia skyrybos     
        print: function(){
            console.log(this.brand+ " "+ this.model + " "+ "Sako labas"); // Json negali isaugoti veikimo logikos (funkcijos)
            // todel kai returninam duomenis is Json, prarandam funkcija ir todel negali pasisveikinti/ kai atgaunam duomenis reikia
            //is naujo prikurti metoda//
        }    
    }

    CARS.push(car);
    console.log(CARS);

    let CARS_string = JSON.stringify(CARS); //konvertuoja duomenis i stringa
    console.log(CARS_string);

    localStorage.setItem("Carslist", CARS_string); // local storage

}

   




