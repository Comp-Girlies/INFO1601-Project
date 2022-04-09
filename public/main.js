let server ="https://api.jikan.moe/v4/anime/1/characters";
let server3 ="https://api.jikan.moe/v4/anime/55/characters";
// let server2 = 'https://jsonplaceholder.typicode.com/todos/1'; // sample api(only use for testing)
let server4 = "https://api.jikan.moe/v4/anime/";

async function getData(url){
    try{
      let response = await fetch(url);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      printFunction(result);// 3. Do something with the data
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }

function printFunction(returnData){
    let result = document.querySelector('#result');
    console.log(result);
    //add html code inside of result
    let html = '';// create html string
    record = returnData;
        //build html string
        html += `<tr id="test">
          <td>${record.data[0].character.name}</td>
          <td>${record.data[0].character.name}</td>
          
          <td><a href="NULL" onclick="getData(NULL, drawDetails)" >View More Details</a></td>    
        </tr>`
    
    
    result.innerHTML = html;//add html string to DOM
}

//getData(server);


async function getData2(url,location){
    try{
      let response = await fetch(url);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      printFunction2(result,location);// 3. Do something with the data
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }

 async function getData3(location){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/top/anime`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      printFunction3(result,location);// 3. Do something with the data
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }

function printFunction2(returnData2,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string
    record2 = returnData2;
        //build html string
        html += `
          
        <div class="card-image" >
                <img src="${record2.data[0].character.images.jpg.image_url}" alt="${record2.data[0].character.name} Image"></img>
         </div>`
    
    
    result.innerHTML = html;//add html string to DOM
}

function printFunction3(returnData3,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string
    record3 = returnData3;
    for(i=0;i<25;i++){
        //build html string
        html += `
        <div>
        <img src="${record3.data[i].images.jpg.image_url}" alt="${record3.data[i].title} Image"></img>
        </div>
        <div>
            <h5>${record3.data[i].title}</h5>
        </div>
        `
    
    }
    result.innerHTML = html;//add html string to DOM
}



async function getTopAnime(location){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/top/anime`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      printTopAnime(result,location);// 3. Do something with the data
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }


 function printTopAnime(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string
    for(i=0;i<AnimeData.data.length;i = i+1){

        // if (i ===AnimeData.data.length-1){
            let sym_rating = printRating(AnimeData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <div class="row">
                <div class="col s4 m3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
            </div>`

                result.innerHTML = html;//add html string to DOM
        // }

        // else if (i ===AnimeData.data.length-2){

        //     let sym_rating = printRating(AnimeData.data[i].score);
        //     let sym_rating2 = printRating(AnimeData.data[i+1].score);
        //     console.log(sym_rating);
        //     //build html string
        //     html += `
        //     <div class="row">
        //         <div class="col s3">
        //             <div class="card-panel card-panel grey center"> 
        //                     <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
        //                     <h5>${AnimeData.data[i].title}</h5>
        //                     <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
        //                 </a>
                    
        //             </div>
                    
        //         </div>
        //         <div class="col s3">
        //             <div class="card-panel card-panel grey center">
        //                 <a href ="animeinfo.html"> 
        //                     <img  src="${AnimeData.data[i+1].images.jpg.image_url}" style="display:inline-block;"/>
        //                     <h5>${AnimeData.data[i+1].title}</h5>
        //                     <h5>Rating: ${AnimeData.data[i+1].score}/10  ${sym_rating2}</h5>
        //                 </a>
        //             </div>
                    
                    
        //         </div>
        //     </div>
        //     `
        
        
        // result.innerHTML = html;//add html string to DOM
        // }

    //    else{
    //         let sym_rating = printRating(AnimeData.data[i].score);
    //         let sym_rating2 = printRating(AnimeData.data[i+1].score);
    //         let sym_rating3 = printRating(AnimeData.data[i+3].score);
    //         console.log(sym_rating);
    //         //build html string
    //         html += `
    //         <div class="row">
    //             <div class="col s3 m2">
    //                 <div class="card-panel card-panel grey center"> 
    //                         <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
    //                         <h5>${AnimeData.data[i].title}</h5>
    //                         <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
    //                     </a>
                    
    //                 </div>
                    
    //             </div>
    //             <div class="col s3 m2">
    //                 <div class="card-panel card-panel grey center">
    //                     <a href ="animeinfo.html"> 
    //                         <img  src="${AnimeData.data[i+1].images.jpg.image_url}" style="display:inline-block;"/>
    //                         <h5>${AnimeData.data[i+1].title}</h5>
    //                         <h5>Rating: ${AnimeData.data[i+1].score}/10  ${sym_rating2}</h5>
    //                     </a>
    //                 </div>
                    
                    
    //             </div>
    //             <div class="col s3 m2">
    //                 <div class="card-panel card-panel grey center">
    //                     <a href ="animeinfo.html"> 
    //                         <img  src="${AnimeData.data[i+2].images.jpg.image_url}" style="display:inline-block;"/>
    //                         <h5>${AnimeData.data[i+2].title}</h5>
    //                         <h5>Rating: ${AnimeData.data[i+2].score}/10  ${sym_rating3}</h5>
    //                     </a>
    //                 </div>
                    
                    
    //             </div>
    //         </div>
        //     `
        
        
        // result.innerHTML = html;//add html string to DOM

        // }
    }
}


//getData2(server,'#image');
//getData2(server3,'#image2');
//getData3("#top");

async function getTrendingAnime(location){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/seasons/now`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      printTrendingAnime(result,location);// 3. Do something with the data
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }

function printTrendingAnime(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string
    for(i=0;i<AnimeData.data.length;i = i+1){

            let sym_rating = printRating(AnimeData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <div class="row">
                <div class="col s4 m3">
                    <div class="section"> 
                        <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                    </div>
                        <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
                        <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
            </div>`

                result.innerHTML = html;//add html string to DOM
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


getTopAnime('#top_anime');
getTrendingAnime('#trending_anime');
