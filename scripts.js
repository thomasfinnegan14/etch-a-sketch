// 16x16 Grid of Square Divs
const container = document.querySelector('#container');

const arrdiv = [];
let gridval = 16;

buildGrid();

const gridbtn = document.querySelector('#gridbtn');

let root = document.querySelector(":root");
let rootStyles = getComputedStyle(root);
let val = rootStyles.getPropertyValue("--val");

gridbtn.addEventListener("click", function(event)
{
    gridval = prompt("Please enter a number from 2-100", "16");

    while (gridval > 100 || gridval < 2)
    {
        gridval = prompt("Please enter a number from 2-100", "16");
    }

    root.style.setProperty("--val", gridval);

    while (container.firstChild)
    {
        container.removeChild(container.firstChild);
    }

    buildGrid();
    currentSketchSize.textContent = "Current Canvas Size: " + gridval + "x" + gridval;

});



function buildGrid()
{
    for (let i=0; i < (gridval * gridval); i++)
    {
        arrdiv[i] = document.createElement('div');
        container.appendChild(arrdiv[i]);
    
        // Mouse Over Event
        arrdiv[i].addEventListener("mouseover", function(event)
        {
            arrdiv[i].classList.add("hover");
        });
    
    }
}

const currentSketchSize = document.querySelector("#current");

currentSketchSize.textContent = "Current Canvas Size: " + gridval + "x" + gridval;

const resetbtn = document.querySelector("#resetbtn");

resetbtn.addEventListener("click", function(event)
{
    while (container.firstChild)
    {
        container.removeChild(container.firstChild);
    }

    buildGrid();
})