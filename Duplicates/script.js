//toString()
//slice()
//riverse
//splice -pirmaselemetas nurodo nuo kurio pradeti, antrasis-kiek kartu pakartoti. Gali ir iterpti
//reverse
//sort
//pop
//index off graina -1 jei sarase nera reiksmes.
//split

let colors=["red", "green", "blue"];
colors.push('red');
colors=ClearDuplicates(colors);

let colors_as_string = colors.toString();
document.getElementById('result').innerText=colors_as_string;



function ClearDuplicates(colors){
    let unique_color_list = [];
    
    for(let i=0; i < colors.length; i++){
        if(unique_color_list.indexOf(colors[i])==-1){
            unique_color_list.push(colors[i]);
        }        
    }

    return unique_color_list;    
}

//split
let color_list='black, blue, yellow';
let color_split=color_list.split(',');

let spalvos = ["black", "blue", "yellow"];

if (spalvos.indexOf('blue')==-1){
    alert("blue nerasta");
}else{
    alert("blue masyve");
}



// splice naudojimas
function deleteColors(color, colors) {
   let x=colors.indexOf(colors);
    colors.splice(x,1);    
    return colors;
}






