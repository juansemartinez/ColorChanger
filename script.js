const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['#ffdde1','#ACB6E5','#800080','#3b5998','#00F260','#0575E6','#fc4a1a','#f7b733']

colorBtn.addEventListener('click',changeColor);

function changeColor(){
    //bodyBcg.style.backgroundColor = colors[2,0,2,3];
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}