
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const copy = document.querySelector("#copy_joke");
const popup=document.querySelector(".copy-popup");
const jokeContainer = document.getElementById("joke");


const btn = document.getElementById("btn");
const url = "https://icanhazdadjoke.com/slack";

let getJoke = () => {
  jokeContainer.classList.remove("fade");

    fetch(url)
    .then((response) => response.json())
    .then((user) => {
      let j = user.attachments[0].text;
      jokeContainer.textContent = j;
      jokeContainer.classList.add("fade");
    }).catch((error) => {
      if(!window.navigator.onLine){
        jokeContainer.textContent = "Error: Your browser is offline. \nPlease try again once you're connected to the internet.";
      }else{
        jokeContainer.textContent = "An Error Occurred: "+ error + ".\n Please try again";
        jokeContainer.classList.add("fade");
      }
    });    

}
  window.addEventListener('online', () => {
    getJoke()
  });

btn.addEventListener("click", getJoke);
getJoke();

btn.addEventListener('click', function handleClick() {
  btn.textContent = 'Get Another Joke';
});


// Fade in 
setTimeout(function () {
  jokeContainer.innerHTML = "Click the button to get a Joke"
  jokeContainer.style.opacity = 1;
}, 500);



toggle.addEventListener("click", () => {
  body.classList.toggle("dark")
    ? (toggle.firstElementChild.className = "far fa-sun")
    : (toggle.firstElementChild.className = "far fa-moon");
});


copy.addEventListener("click", () => {
  const text = jokeContainer.textContent;
  navigator.clipboard.writeText(text);
  popup.classList.add("fade-in-image");
  setTimeout(function() {
    popup.classList.remove("fade-in-image");
  },3000);
  copy.querySelector("i").className = "fa-solid fa-check"
  setTimeout(function () {
    copy.querySelector("i").className = "fa-regular fa-copy"
  }, 1000);
});
