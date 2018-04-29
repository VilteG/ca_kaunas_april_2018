//$("h1#heading1").hide();

$('p span').css('color', 'red'); // pakeicia spalva teksto kuris yra span

// $(':button').hide();

$('[href]').css('color','green');

//$('*').hide(); // targerts everything


// MOUSE EVENTS

/*
$('#btn-1').click(function(){
        $('#paragraph1').hide(); //// hides pagraph1
});

$('#btn-2').click(function(){
    $('#paragraph1').show(); //// shows pagraph1
});


$('#btn-1').dblclick(function(){
    $('#paragraph1').toggle(); // viskas vyksta su double click    
});

$('#btn-1').hover(function(){
    $('#paragraph1').toggle(); // paragrafas hoverina    
});



$('#btn-1').click(function(e){
    console.log(e);

});
*/

$('input').focus(function(){
    $(this).css('background', 'green'); /// this vietoj id name arba email, t.y. bet kuris elementas, kuriame yra pele arba esi
});

$('input').blur(function(){
    $(this).css('background', 'white'); /// blur pakeicia laukeli atgal i balta 
});


/// DOM manipulation



