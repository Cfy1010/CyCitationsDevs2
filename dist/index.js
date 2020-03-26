// recuperation l'id  'nom'
let text = document.getElementById('nom');
let btn = document.getElementById('btn');
let avatar = document.getElementById('avatar');
let citation = document.getElementById('citation');
const url = "http://graven.yt/citations.json";
let citations = [];



// faire l'evenement lors d'un clic boutton
btn.addEventListener('click', updatePage);

// recuperer toutes les citations depuis le lien" graven.yt/citations.json
fetch(url).then((data) => {
  data.json().then((data) => {
    citations = data;
    // affichage citation
    console.log(citations);
 });
})



function updatePage() {
// choix au hasard d'une citation parmis la liste
  let random = Math.floor(Math.random() * citations.length - 0);
  let randomCitation = citations[random];

  console.log(randomCitation)
  // modification
  text.innerText = randomCitation['nom'];
  citation.innerText = randomCitation['citation'];
  avatar.setAttribute('src', randomCitation['image']);
}