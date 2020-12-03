const mainImage = document.querySelector("img");
const button = document.querySelector(".btn");

const Images = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];

button.addEventListener("click", ()=>{
console.log("hello from script file!");
let rnd = Math.floor(Math.random() * Images.length);
mainImage.src = Images[rnd];
console.log("Random number:", rnd);
});
