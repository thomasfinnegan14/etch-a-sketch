// 16x16 Grid of Square Divs
const container = document.querySelector('#container');

const arrdiv = [];

for (i=0; i < 256; i++)
{
    arrdiv[i] = document.createElement('div');
    container.appendChild(arrdiv[i]);
}