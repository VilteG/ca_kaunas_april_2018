$('#btn_filter').click(function(){
	
	let brand_text = $('#brandSelect').val();    

    
    let filteredCars = CARS.filter(function(car){
        return car.brand.toLowerCase() == brand_text.toLowerCase();     
    });

    let topCar = getTopCar(filteredCars);
    console.log(topCar);

    printCars(filteredCars);
    printTopCar(topCar);
});


function printCars(array){
	let h = "";
	for(let i = 0; i<array.length;i++){
		let car = array[i];
		h = h + "<div class='row'>";
		h = h + "<div class='col-12'>";
		h = h + "<h5>"+car.brand+" "+car.model+"</h5>";
		h = h + "<div class='brandImg'><img src='cars/" + car.brand.toLowerCase() + ".png' /></div>";
		h = h + "<table class='car_table'>";
		h = h + "<tr><th>Seats:</th><td>"+car.seats+"</td></tr>";
		h = h + "<tr><th>HP:</th><td>"+car.power+"</td></tr>";
		h = h + "<tr><th>Mileage:</th><td>"+car.mileage+"</td></tr>";
		h = h + "<tr><th>Date:</th><td>"+car.date+"</td></tr>";
		h = h +"</table>";

		h = h +"<hr>";
		
		h = h + "</div>"; // uzdarom col-12
		h = h + "</div>"; // uzdarom row
	}
	$("#result").html(h);
}

function printTopCar(car){

	let h = "";
	h = h + "<div class='row'>";
	h = h + "<div class='col-12'>";
    h = h + "<h5>"+car.brand+" "+car.model+"</h5>";
    h = h + "<div class='brandImg'><img src='cars/" + car.brand + ".png' /></div>";
	h = h + "<table class='car_table'>";
	h = h + "<tr><th>Seats:</th><td>"+car.seats+"</td></tr>";
	h = h + "<tr><th>HP:</th><td>"+car.power+"</td></tr>";
	h = h + "<tr><th>Mileage:</th><td>"+car.mileage+"</td></tr>";
	h = h + "<tr><th>Date:</th><td>"+car.date+"</td></tr>";
	h = h +"</table>";	
	h = h + "</div>"; // uzdarom col-12
    h = h + "</div>"; // uzdarom row	
    
	$("#newest").html(h);
}

function getTopCar(array) {
    let topCar= array [0];
        for(let i = 0; i< array.length; i++){
            if(array[i].mileage < topCar.mileage){
                topCar = array[i];
        }
    }
    return topCar;
};



