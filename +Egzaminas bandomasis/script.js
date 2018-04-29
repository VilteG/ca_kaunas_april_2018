
$('#btn_rodyti').click(function () {

    ShowResult();
    printPeopleFromLt();

});


function ShowResult() {

    let name_input = $('#name').val();
    let b_day_input = $('#birthday').val();

    let h = "";

    if (name_input && b_day_input) {
        h = h + '<h2>' + name_input + '</h2>' + '<p>' + 'Gimimo diena:' + ' ' + b_day_input + '</p>';
    } else if (!name_input && b_day_input) {
        h = h + '<h2>' + 'Iveskite varda' + '</h2>' + '<p>' + 'Gimimo diena:' + ' ' + b_day_input + '</p>';
    } else if (name_input && !b_day_input) {
        h = h + '<h2>' + name_input + '</h2>' + '<p>' + 'Iveskite gimimo diena' + '</p>';
    } else {
        h = h + '<p>' + 'Iveskite varda ir gimimo diena' + '</p>';
    }


    let d = new Date(b_day_input);    
    let day = d.getDate();
    let month = d.getMonth() + 1;

    let zodiak_sign = getZodiacSign(day,month); 


    h = h + '<p>' + 'Zodiako zenklas:' + ' ' + zodiak_sign + '</p>';

    $("#result").html(h);
};


function printPeopleFromLt(){

    let poepleFromLt = [];

    poepleFromLt = testData.filter(function(person){
        return person.salis == "Lithuania";
    });

    console.log(poepleFromLt);

    h = "";

    for(let i=0; i < poepleFromLt.length; i++){   

    h = h + '<p>' + poepleFromLt[i].vardas + " "+ poepleFromLt[i].pavarde + '</p>';
       
    };

    $("#people").html(h);
    
};

function getFamousPeople(day,month){

    let famousPeople = testData.filter(function (person) {
        let person_bDay = new Date(person.gimimoDiena);
		return person_bDay.getDate() == day && person_bDay.getMonth() + 1 == month; 
    });

    return famousPeople;
    console.log(famousPeople);
}


































