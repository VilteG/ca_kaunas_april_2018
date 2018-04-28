
$('#search').click(function () {
    let brand_input = $("#txt_brand").val();
    
    let filteredCars = CARS.filter(function (car) { // laikinasis kintamasis filter funkcijai
            let s_brand = car.brand.toLowerCase();
            let s_brand_text = brand_input.toLowerCase();        
    
        return s_brand.indexOf(s_brand_text) > -1;           
        
    });

    let powerCar = getMostPowerfullCar(filteredCars);
    printCar(powerCar);
    printCars(filteredCars);

});


function printCars(array){
	let h = "";
	for(let i = 0; i<array.length;i++){
		
		h = h + "<div class='row'>";
		h = h + "<div class='col-6'>";
		h = h + "<h5>"+ array[i].brand+" "+array[i].model+"</h5>";
		h = h + "<div class='brandImg'><img src='cars/" +array[i].brand.toLowerCase() + ".png' /></div>";
		h = h + "<table class='car_table'>";
		h = h + "<tr><th>Seats:</th><td>"+array[i].seats+"</td></tr>";
		h = h + "<tr><th>HP:</th><td>"+array[i].power+"</td></tr>";
		h = h + "<tr><th>Mileage:</th><td>"+array[i].mileage+"</td></tr>";
		h = h + "<tr><th>Date:</th><td>"+array[i].date+"</td></tr>";
		h = h +"</table>";

		h = h +"<hr>";
		
		h = h + "</div>"; // uzdarom col-12
		h = h + "</div>"; // uzdarom row
	}
	$("#result").html(h);
};


function getMostPowerfullCar (array){

    let powerfull_car = array[0];

    for(let i = 0; i< array.length; i++){
        if (array[i].power > powerfull_car.power){
        powerfull_car = array[i];
        }
    }

    return powerfull_car;
};

function printCar(array){
	let h = "";
		
		h = h + "<div class='row'>";
		h = h + "<div class='col-12'>";
		h = h + "<h5>"+array[i].brand+" "+array[i].model+"</h5>";
		h = h + "<div class='brandImg'><img src='img/" + car.brand.toLowerCase() + ".png' /></div>";
		h = h + "<table class='car_table'>";
		h = h + "<tr><th>Seats:</th><td>"+array[i].seats+"</td></tr>";
		h = h + "<tr><th>HP:</th><td>"+array[i].power+"</td></tr>";
		h = h + "<tr><th>Mileage:</th><td>"+array[i].mileage+"</td></tr>";
		h = h + "<tr><th>Date:</th><td>"+array[i].date+"</td></tr>";
		h = h +"</table>";

		h = h +"<hr>";
		
		h = h + "</div>"; // uzdarom col-12
        h = h + "</div>"; // uzdarom row	        

	$("#newestCar").html(h);
};



$('#btn_ajax').click (function(){
	$('#result_ajax')

});

