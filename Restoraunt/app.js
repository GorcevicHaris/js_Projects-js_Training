let inputText = document.querySelector(".inputText");
let buton = document.querySelector(".buton");
let nextButon = document.querySelector(".nextBtn");
let nextPageDiv = document.querySelector(".nextPageDiv");
let imageDiv = document.querySelector(".imagesDiv");
let slika = document.querySelector(".img");
let li1 = document.querySelector(".li1");
let li2 = document.querySelector(".li2");
let li3 = document.querySelector(".li3");
let li4 = document.querySelector(".li4");
let li5 = document.querySelector(".li5");
let li6 = document.querySelector(".li6");
let li7 = document.querySelector(".li7");
let li8 = document.querySelector(".li8");
let li9 = document.querySelector(".li9");
let li10 = document.querySelector(".li10");
let removerButon = document.querySelector(".removerButon");
let podaci3 = document.querySelector(".podaci3");

buton.addEventListener("click", (ev) => {
  ev.preventDefault();

  let name = inputText.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      slika.src = data.meals[0].strMealThumb;
      li1.textContent = data.meals[0].strMeasure1;
      li1.style.display = "list-item";
      li2.textContent = data.meals[0].strMeasure2;
      li2.style.display = "list-item";
      li3.textContent = data.meals[0].strIngredient3;
      li3.style.display = "list-item";
      li4.textContent = data.meals[0].strMeasure4;
      li4.style.display = "list-item";
      li5.textContent = data.meals[0].strMeasure5;
      li5.style.display = "list-item";
      li6.textContent = data.meals[0].strMeasure6;
      li6.style.display = "list-item";
      li7.textContent = data.meals[0].strCategory;
      li7.style.display = "list-item";
      li8.textContent = data.meals[0].strArea;
      li8.style.display = "list-item";
      li9.textContent = data.meals[0].strIngredient1;
      li9.style.display = "list-item";
      li10.textContent = data.meals[0].strIngredient2;
      li10.style.display = "list-item";
      podaci3.textContent = data.meals[0].strInstructions;
    });

  const nextButonn = (ev, dis) => {
    ev.preventDefault();
    nextPageDiv.style.display = dis;
  };

  nextButon.addEventListener("click", function Hamza() {
    nextButonn(ev, "block");
  });

  removerButon.addEventListener("click", () => {
    nextButonn(ev, "none");
  });
});
