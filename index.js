const body = document.querySelector("body");
const box = document.querySelectorAll(".color-box")
console.log(box.length)
for (let i = 0; i < box.length; i++){
    let cbox = box[i];
    cbox.addEventListener('click', (e) => {
        let color = e.currentTarget.classList[1];
        body.style.backgroundColor = color;
        
    })
}
