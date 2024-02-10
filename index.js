var slct=document.querySelector(".album");
for(let i=0;i<=8;i++){
    slct.innerHTML +=` <div class="card">
    <div class="img"><img src="./img/Arijit-Singh-Latest-Style-Images-Download-2.jpg" alt=""></div>
   <div id="text"><h3>2010s Mix <br> <p>listen to Arijit Singh <br> best songs</p></h3></div>
 </div>
 <div class="card">
     <div class="img"><img src="./img/Arijit-Singh-Latest-Style-Images-Download-2.jpg" alt=""></div>
    <div id="text"><h3>2010s Mix <br> <p>listen to Arijit Singh <br> best songs</p></h3></div>
  </div>
`
}

//const fetch = require('node-fetch'); // Import fetch if you're using Node.js

const url = 'https://hotmoapi.p.rapidapi.com/method?get=main';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b639a490f0mshc123864dba01f8bp130ddejsn9185fa1dcf3b',
        'X-RapidAPI-Host': 'hotmoapi.p.rapidapi.com'
    }
};

const song = async () => {
    try {
        const response = await fetch(url,options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

song();
