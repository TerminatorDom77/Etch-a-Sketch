container = document.getElementById("container");
for (let i = 1; i < 17; i++){
    for (let j = 1; j < 17; j++){
        let div = document.createElement("div");
        div.setAttribute('id', parseInt(i.toString() + j.toString()));
        //div.textContent = "e";
        div.style.cssText = "flex: 1; min-width: 5.75%; padding-bottom: 35px; border: 1px solid gray;"
        var mouseDown = false;
        var mouseOver = false;
        div.addEventListener('mousedown', () => {
            mouseDown = true;
            if (mouseOver){
                div.style.backgroundColor = 'red';
            }
        })
        div.addEventListener('mouseup', () => {
            mouseDown = false;
        })
        div.addEventListener('mouseover',() => {
            mouseOver = true;
            if (mouseDown){
                div.style.backgroundColor = 'red';
            }
        })
        div.addEventListener('mouseleave', () => {
            mouseOver = false;
        })
        container.appendChild(div);
    }
}
container.style.cssText= "display: flex; flex-wrap: wrap; margin: auto; margin-top: 12.5%; width: 50%; text-align: center;"