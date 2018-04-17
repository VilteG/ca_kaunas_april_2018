
let produktai=[];

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