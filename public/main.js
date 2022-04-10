let server ="https://api.jikan.moe/v4/anime/1/characters";
let server3 ="https://api.jikan.moe/v4/anime/55/characters";
// let server2 = 'https://jsonplaceholder.typicode.com/todos/1'; // sample api(only use for testing)
let server4 = "https://api.jikan.moe/v4/anime/";


////////////////////////////////////////////////////////////////////////////////////////////////////


async function getTopAnime(location){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/top/anime`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);

      let mql = window.matchMedia('(max-width: 450px)');
      console.log(mql.matches);
      
      if( (mql.matches) === true){
          // to print 2 tiles per row.
          printTopAnime2(result,location);// 3. Do something with the data 
      }

      else{
          // 4 tiles per row
        printTopAnime(result,location);// 3. Do something with the data
      }

      
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }


 function printTopAnime(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string

    i=0;
    while(i<AnimeData.data.length){

            let sym_rating = printRating(AnimeData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <center>
            <div class="row">
                <div class="col s6 l3">
                    <div class="section"> 
                            <img onclick = "getAnimeInfo(${AnimeData.data[i].mal_id})" src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5 >#hello${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>
                </div>
                </center>
                `

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

    }
}

function printTopAnime2(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string

    i=0;
    while(i<AnimeData.data.length){

            let sym_rating = printRating(AnimeData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <center>
            <div class="row">
                <div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>
                </div>
                </center>
                `

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

    }
}


async function getTrendingAnime(location){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/seasons/now`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      let mql = window.matchMedia('(max-width: 450px)');
      if( (mql.matches) === true){
        // to print 2 tiles per row.
        printTrendingAnime2(result,location);// 3. Do something with the data 
    }

    else{
        // 4 tiles per row
        printTrendingAnime(result,location);// 3. Do something with the data
    }
      
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }


function printTrendingAnime(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string

    i=0;
    while(i<AnimeData.data.length){

            let sym_rating = printRating(AnimeData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <center>
            <div class="row">
                <div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>
                </div>
                </center>
                `

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

    }
}


function printTrendingAnime2(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string

    i=0;
    while(i<AnimeData.data.length){

            let sym_rating = printRating(AnimeData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <center>
            <div class="row">
                <div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${i+1} ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>
                </div>
                </center>
                `

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

    }
}


function printRating(rating){

    let temp = rating;
    let sym_rating = "";
    let count = 0;

    while (temp > 0){

        if (temp >= 2){
            sym_rating = sym_rating + "★";
            temp = temp -2;
            count++;
        }
        else if (temp > 0 && temp < 2){
            sym_rating = sym_rating + "☆"; // insert no star symbol.
            temp = 0;
            count++;
            
        }

    }
    while(count < 5){
        sym_rating = sym_rating + "☆";
        count++;
    }
       
    return sym_rating;
}

// hello. upcoming anime here

async function getUpcomingAnime(location){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
    
    printUpcomingAnime(result,location);// 3. Do something with the data
      
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }

 function printUpcomingAnime(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string

    i=0;
    while(i<AnimeData.data.length){

            let sym_rating = printRating(AnimeData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <div class="swiper-slide">
            <a class="thumbTile" href="#">
                <img class="thumbTile__image"
                    src="https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUqwomVyMFsby9zeXLLnkfv744mKCzQDWL7rUDhbwg89bpT-V7qYoW-NNfjFaG3nFcDWu-U49vpUFB_L4njc2GFl6l60Efb4oT-_0e3oi3Dh8nwyLZhG2ciBHGUnRMB_J-D2jQk2Qz_WM4n8A_8b8ZqFDpj80B6KJ9T2bXR7rYcl0M8MaDCsR68.jpg?r=93f"
                    alt="The Queen's Gambit">
            </a>
        </div>`

                result.innerHTML = html;//add html string to DOM

                i = i + 1;

                if( i < (AnimeData.data.length -1)){
                    html += ` <div class="swiper-slide">
                    <a class="thumbTile" href="#">
                        <img class="thumbTile__image"
                            src="https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUqwomVyMFsby9zeXLLnkfv744mKCzQDWL7rUDhbwg89bpT-V7qYoW-NNfjFaG3nFcDWu-U49vpUFB_L4njc2GFl6l60Efb4oT-_0e3oi3Dh8nwyLZhG2ciBHGUnRMB_J-D2jQk2Qz_WM4n8A_8b8ZqFDpj80B6KJ9T2bXR7rYcl0M8MaDCsR68.jpg?r=93f"
                            alt="The Queen's Gambit">
                    </a>
                </div>`

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += ` <div class="swiper-slide">
                    <a class="thumbTile" href="#">
                        <img class="thumbTile__image"
                            src="https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUqwomVyMFsby9zeXLLnkfv744mKCzQDWL7rUDhbwg89bpT-V7qYoW-NNfjFaG3nFcDWu-U49vpUFB_L4njc2GFl6l60Efb4oT-_0e3oi3Dh8nwyLZhG2ciBHGUnRMB_J-D2jQk2Qz_WM4n8A_8b8ZqFDpj80B6KJ9T2bXR7rYcl0M8MaDCsR68.jpg?r=93f"
                            alt="The Queen's Gambit">
                    </a>
                </div>`

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += ` <div class="swiper-slide">
                    <a class="thumbTile" href="#">
                        <img class="thumbTile__image"
                            src="https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUqwomVyMFsby9zeXLLnkfv744mKCzQDWL7rUDhbwg89bpT-V7qYoW-NNfjFaG3nFcDWu-U49vpUFB_L4njc2GFl6l60Efb4oT-_0e3oi3Dh8nwyLZhG2ciBHGUnRMB_J-D2jQk2Qz_WM4n8A_8b8ZqFDpj80B6KJ9T2bXR7rYcl0M8MaDCsR68.jpg?r=93f"
                            alt="The Queen's Gambit">
                    </a>
                </div>
                `

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

    }
}

getTopAnime('#top_anime');
getTrendingAnime('#trending_anime');
getUpcomingAnime('#upcoming_anime') ;



