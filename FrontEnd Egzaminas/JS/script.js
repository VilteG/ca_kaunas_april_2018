

$('#btn_filter').click(function(){   

    let filterYear = $('#filmSelect').val();    
    
    let topMovie =  getTopRated(movies);
    console.log(topMovie);     
    
    
   
    ShowMovies(movies);
    printTopMovie(topMovie);

});


function getTopRated(array) {
    let topMovie= array [0];
        for(let i = 0; i< array.length; i++){
            if(array[i].popularity > topMovie.popularity){
                topMovie = array[i];
        }
    }
    return topMovie;
};


    function printTopMovie(array){
            let h = "";
            
            h = h + "<div class='row'>";
            h = h + "<div class='col-12'>";
            h = h + "<h5>"+array.title+"</h5>";                    
            h = h + "<div> <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2"+ array.poster_path+"'></div>";
            h = h + "<table>";
            h = h + "<tr><th>Metai:</th><td>"+array.release_date+"</td></tr>";
            h = h + "<tr><th>Overview:</th><td>"+array.overview+"</td></tr>";            
            h = h +"</table>";
    
            h = h +"<hr>";
            
            h = h + "</div>"; 
            h = h + "</div>"; 	        
    
        $("#resultTopMovie").html(h);
    };

    function ShowMovies(array){
        let h = "";
        for(let i = 0; i<array.length;i++){
            h = h + "<div class='row'>";
            h = h + "<div class='col-12'>";
            h = h + "<h5>"+array[i].title+"</h5>";
            h = h + "<div> <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2"+ array[i].poster_path+"'></div>" ;
            h = h + "<table>";
            h = h + "<tr><th>Metai:</th><td>"+array[i].release_date+"</td></tr>";
            h = h + "<tr><th>Overview:</th><td>"+array[i].overview+"</td></tr>";            
            h = h +"</table>";
    
            h = h +"<hr>";
            
            h = h + "</div>"; 
            h = h + "</div>"; 	        
    
        $("#result").html(h);
    }
};