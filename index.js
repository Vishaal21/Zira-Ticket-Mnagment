const lightblue = document.querySelector(".lbbox");
const lightgreen = document.querySelector(".lgbox");
const lightpink = document.querySelector(".lpbox");
const bbox = document.querySelector(".bbox");

const body = document.querySelector("body");
lightblue.addEventListener('click', () => {
    body.style.backgroundColor = "lightblue"
})
lightgreen.addEventListener('click', () => {
    body.style.backgroundColor = 'lightgreen';
})
lightpink.addEventListener('click', () => {
    body.style.backgroundColor='lightpink'
})
bbox.addEventListener('click', () => {
    body.style.backgroundColor='#666'
})