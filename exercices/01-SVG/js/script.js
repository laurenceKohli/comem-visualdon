const rect = document.querySelector('#rectangle');
let isRed = true;
rect.addEventListener("click", () =>{
    isRed = !isRed;
    let color = isRed ? "red" : "black";
    rectangle.style.fill = color;
    console.log("clicl");
})

const donut = document.querySelector('#donut');

donut.addEventListener("mouseover", ()=>{
    donut.setAttribute('r', '75');
})