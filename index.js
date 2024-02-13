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


const songInfo= [{song:"heyyy..",artist:"Arjit",img:"./img/Arijit-Singh-Latest-Style-Images-Download-2.jpg",index:"1"}]
const albumarr=[{image:"hello"}]



const client_id = '8adcfe0ab82341e484cb80c8e45ec16f'; 
const client_secret = '7239a79f046f4c73a4dfd09e10b6d794';


async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
    },
  });

  return await response.json();
}

async function getAlbum(access_token) {
  const response = await fetch("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
}

var temp;
async function fetchAndLogData() {
  try {
      const e = await getToken();
      const album = await getAlbum(e.access_tokens);
      const temp = album.images[0].url;
      albumarr.push({ image: temp });
      console.log(album);
    const albumImage=document.querySelector("#top #img");


   albumarr.forEach((e)=>{
    albumImage.innerHTML=`<img src=${e.image} alt="">`
   })
     
  } catch (error) {
      console.error(error);
  }
}

fetchAndLogData();

const clutter= "";
 
  const songName=document.querySelector(".list1");

songInfo.forEach((e)=>{
  songName.innerHTML+= `<div class="index">${e.index} <div class="coverimg"><img src="./img/Arijit-Singh-Latest-Style-Images-Download-2.jpg" alt=""></div><p>${e.song}</p></div>`;
})