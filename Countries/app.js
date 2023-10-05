let maindiv = document.querySelector(".maindiv");
let inputText = document.querySelector("#inputText");
let buton = document.querySelector(".buton");
let img = document.querySelector("img");
let imgDiv = document.querySelector(".imgDiv");
let p1 = document.querySelector(".p1");
let p0 = document.querySelector(".p0");
let p3 = document.querySelector(".p3");
let p4 = document.querySelector(".p4");

buton.addEventListener("click", (ev) => {
  ev.preventDefault();
  let countryName = inputText.value;
  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((fetch) => fetch.json())
    .then((data) => {
      console.log(data);
      let flags = data[0].flags.svg;
      console.log(flags);
      img.src = flags;
      p0.textContent = `Name: ${data[0].name.common}`;
      p1.textContent = `Capital: ${data[0].capital[0]}`;
      p4.textContent = `Region: ${data[0].region}`;
      p3.textContent = `Continent: ${data[0].continents}`;
    });
});
//AKO PROBAMO DA DODAMO ELEMNTE TJ DA IH CREATE PREKO JS SVAKI PUT CE DA IH DODAJE
//NECE DA IH MENJA  A AKO TO URADIMO VEC IMAMO PARAGRAFE ILI NESTI PRAZNIO I SAMO
//DODELIMO IME ILI NEKE VREDNOSTI U JS TO VEC SVAKI PUT KAD KLIKNEMO MENJA
