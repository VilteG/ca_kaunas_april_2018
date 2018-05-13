
let produktai=[];

let returned_produktai = localStorage.getItem("Prod_sar");
console.log(returned_produktai);
let r_produktai = JSON.parse(returned_produktai); // gaunam nebe stringa, o objekta
console.log(r_produktai);


if (r_produktai != null) {
       produktai = r_produktai;
       printProduct(produktai); // iskvieciam funkcija kuri grazina issaugota sarasa (tui buti cikla, test it!)
}


function Prideti(){
   
    let newProduct=document.getElementById("product").value;
    let rasta_dublikatu=false;

    rasta_dublikatu=checkForDuplicates(newProduct, produktai);

    if (rasta_dublikatu==false){
        produktai.push(newProduct);
    }else{
        alert("reiksme jau egzistuoja");
    }   
    printProduct(produktai);

    let produktai_string = JSON.stringify(produktai); //konvertuoja duomenis i stringa
    console.log(produktai_string);
    localStorage.setItem("Prod_sar", produktai_string); // local storage

}


function printProduct(produktai){
     h="<ul>";
for (let i=0; i < produktai.length; i++){
        
    h = h+"<li>"+produktai[i]+"</li>"; //String aggrergation
}
    h= h+ "</ul>";
document.getElementById("result").innerHTML=h;
}


function checkForDuplicates(newProduct, produktai){
    let found = false;
    for(let i = 0; i < produktai.length; i++){
        if(produktai[i] == newProduct){
            found = true;
        }
    }
    return found;
}