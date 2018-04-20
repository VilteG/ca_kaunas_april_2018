let PREKES=[];

let r_PREKES_string = localStorage.getItem("Prekiusar");// istraukiam  is local storage
let PREKES_returned = JSON.parse(r_PREKES_string); // gaunam nebe stringa, o objekta

if (PREKES_returned != null) {
       PREKES = PREKES_returned;
}
printProduct(PREKES);



function sukurti(){

    let pavad_text=document.getElementById('pav').value;  
    let kaina_number=Number(document.getElementById('kaina').value);  
    let kiekis_number=Number(document.getElementById('kiekis').value);    
    let miestas_text=(document.getElementById('miestas').value); 


let preke = { 
    pavad:pavad_text,        
    kaina:kaina_number,
    kiekis:kiekis_number,
    miestas:miestas_text
    }

    PREKES.push(preke);
    console.log(PREKES);

   printProduct(PREKES);

   let PREKES_string = JSON.stringify(PREKES); //konvertuoja duomenis i stringa
   console.log(PREKES_string);

   localStorage.setItem("Prekiusar", PREKES_string); // local storage

}


function printProduct(PREKES){
   let h = "";
   h = h +"<table class='table' id='myTable'>";
   h = h + "<tr> <th>Pavadinimas</th> <th>Kaina</th> <th>Kiekis</th> <th>Miestas</th> <th>Veiksmas</th></tr>";

    for (let i=0; i < PREKES.length; i++){   

        h = h+"<tr><th>" + PREKES[i].pavad+ "</th>"
         +"<th>" + PREKES[i].kaina +"</th>"
         +"<th>" + PREKES[i].kiekis + "</th>"
         +"<th>" + PREKES[i].miestas + "</th>"
         +"<th>" + "<class='btn btn-link float-right' onclick='salinti("+i+")' role='button'> Salinti </button>" +"</th></tr>"; 
    }   
     h = h + "</table>"
     document.getElementById("result").innerHTML= h;
}

function salinti (index) {
    PREKES.splice(index,1); 
    
    printProduct(PREKES);

    let PREKES_string = JSON.stringify(PREKES);    
    localStorage.setItem("Prekiusar", PREKES_string); 
    };

function atsaukti(){
    document.getElementById("myForm").reset();
}

function clearData (){
    localStorage.removeItem(Prekiusar);
    PREKES=[];
}