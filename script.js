const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['#ffdde1','#ACB6E5','#800080','#3b5998','#00F260','#0575E6','#fc4a1a','#f7b733','#6A9113','#135058','#F1F2B5','#D1913C','#dc2430','#7b4397','#8e9eab','#136a8a','#267871','#00bf8f','#001510','#ff0084','#C779D0']

colorBtn.addEventListener('click',changeColor);

function changeColor(){
    //bodyBcg.style.backgroundColor = colors[2,0,2,3];
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}