container = document.getElementById("container");

const colorOption = document.getElementById("color");
let color = '';
colorOption.addEventListener('input', () => {
    color = colorOption.value;
})
let size = 16 //default size of grid is 16x16 units
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    size = prompt("What grid size do you want? (x by x)");
    width = 600 / size - 2; //there's a minus 2 there because the border for the divs will be 1 px on each side
    createGrid(size, width);
})

function createGrid(size, width){
    if (container.children != 0){
        let divs = document.querySelectorAll("div");
        for (let i = 0; i < divs.length; i++){
            if (divs[i].id != "options" && divs[i].id != "container"){
                divs[i].remove();
            }
        }
    }
    for (let i = 1; i <= size; i++){
        for (let j = 1; j <= size; j++){
            let div = document.createElement("div");
            div.setAttribute('id', parseInt(i.toString() + j.toString()));
            /*The above thing looks confusing, but all it does is make an id that doesn't numerically add the numbers
            together*/
            div.style.flex = 1;
            div.style.flexBasis = `${width}px`;
            div.style.maxWidth = `${width}px`;
            div.style.height= `${width}px`;
            div.style.border = `${1}px solid gray`;
            div.style.padding = `${0}px`;
            div.style.flexGrow = 0;

            //Padding is giving the divs extra space

            var mouseOver = false;
            var mouseDown = false;
            div.addEventListener('mousedown', () => {
                mouseDown = true;
                if (mouseOver){
                    div.style.backgroundColor = color;
                }
            })
            div.addEventListener('mouseup', () => {
                mouseDown = false;
            })
            div.addEventListener('mouseover',() => {
                mouseOver = true;
                if (mouseDown){
                    div.style.backgroundColor = color;
                }
            })
            div.addEventListener('mouseleave', () => {
                mouseOver = false;
            })
            container.appendChild(div);
            console.log(div.style.width);

        }
    }
}