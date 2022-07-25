// 16x16 Grid of Square Divs
const container = document.querySelector('#container');

const arrdiv = [];

for (let i=0; i < 256; i++)
{
    arrdiv[i] = document.createElement('div');
    container.appendChild(arrdiv[i]);

    // Mouse Over Event
    arrdiv[i].addEventListener("mouseover", function(event)
    {
        arrdiv[i].classList.add("hover");
    });

}