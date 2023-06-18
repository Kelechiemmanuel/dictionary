const wrapper = document.querySelector(".wrapper"),
searchInput = wrapper.querySelector("input"),
volume = wrapper.querySelector(".word i"),
infoText = wrapper.querySelector(".info-text"),
synonyms = wrapper.querySelector(".synonyms .list"),
removeIcon = wrapper.querySelector(".search span");
let audio;

function data(result, word){
if(result.title){
    infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`;
}else{
    wrapper.classList.add("active");
    let definitions = result[0].meanings[0].definitions[0],
    phontetics = `${result[0].meanings[0].partOfSpeech}  /${result[0].phonetics[0].text}/`;
    document.querySelector(".word p").innerText = result[0].word;
    document.querySelector(".word span").innerText = phontetics;
    document.querySelector(".meaning span").innerText = definitions.definition;
    document.querySelector(".example span").innerText = definitions.example;
    audio = new Audio(result[0].phonetics[0].audio);

    if(definitions.synonyms[0] == undefined){
        synonyms.parentElement.style.display = "none";
    }else{
        synonyms.parentElement.style.display = "block";
        synonyms.innerHTML = "";
        for (let i = 0; i < 5; i++) {
    let tag = `<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[i]},</span>`;
    tag = i == 4 ? tag = `<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[4]}</span>` : tag;
    synonyms.insertAdjacentHTML("beforeend", tag);
  }
  }
}
}

function search(word){
fetchApi(word);
searchInput.value = word;
}

function fetchApi(word){
wrapper.classList.remove("active");
infoText.style.color = "#000";
infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
fetch(url).then(response => response.json()).then(result => data(result, word)).catch(() =>{
    infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`;
});
}

searchInput.addEventListener("keyup", e =>{
let word = e.target.value.replace(/\s+/g, ' ');
if(e.key == "Enter" && word){
    fetchApi(word);
}
});

volume.addEventListener("click", ()=>{
volume.style.color = "#4D59FB";
audio.play();
setTimeout(() =>{
    volume.style.color = "#999";
}, 800);
});

removeIcon.addEventListener("click", ()=>{
searchInput.value = "";
searchInput.focus();
wrapper.classList.remove("active");
infoText.style.color = "#9A9A9A";
infoText.innerHTML = "Type any existing word and press enter to get meaning, example, synonyms, etc.";
});



function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
    content.innerText = "A - Z English Dictionary";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
    content.innerText = "A - Z English Dictionary";
}



function subscribe() {
const buttonElement = document.querySelector('.js-subscribe-button');
document.getElementById("demo").style.backgroundColor = "orange";
document.getElementById("demo").style.border = "none";
document.getElementById("demo").style.color = "white";
document.getElementById("demo").style.fontSize = "20px";
document.getElementById("demo").style.borderRadius = "30px";

if (buttonElement.innerHTML === 'Subscribe') {
    buttonElement.innerHTML = 'UnSubscribed';
} else {

    buttonElement.innerHTML = 'Subscribe';
    document.getElementById("demo").style.backgroundColor = "white";
    document.getElementById("demo").style.color = "black";

}
}   

    document.getElementById("upVote").addEventListener("click", () => {
    event.target.classList.toggle("liked")
})
    document.getElementById("downVote").addEventListener("click", () => {
    event.target.classList.toggle("disliked")
})


var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li).style.color = 'orange';
    document.getElementById("unordered").appendChild(li).style.listStyle = 'none';
});



let modalBtns = [...document.querySelectorAll(".button2")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest(".modal");
    modal.style.display = "none";
  };
});
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};



function openNav(){
  document.getElementById('myNav').style.height = '70%';
}
function closeNav(){
  document.getElementById('myNav').style.height = '0';
}


let mybutton = document.getElementById("repeat");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 350) {
    mybutton.style.backgroundColor = "#061f33";

} else {
    mybutton.style.backgroundColor = "white";
    
}
}




function swipeOpen(){
  document.getElementById('myHelp').style.width = '13%';
}
function swipeClose(){
  document.getElementById('myHelp').style.width = '0%';
}

