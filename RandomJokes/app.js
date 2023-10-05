let buton = document.querySelector(".buton");
let paragraf = document.querySelector(".pg");
let maindiv = document.querySelector(".mainDiv");
let fetchData = () => {
  fetch(
    `https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist`
  )
    .then((response) => response.json())
    .then((arg) => {
      console.log(arg);
      paragraf.textContent = arg.setup || arg.joke;
    });
};
buton.addEventListener("click", () => {
  fetchData();
});
fetchData();
