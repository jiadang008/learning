var headOne = document.querySelector('#one');
var headTwo = document.querySelector('#two');
var headThree = document.querySelector('#three');

headOne.addEventListener('mouseover', function(){
    headOne.textContent = "Mouse Currently Over";
    headOne.style.color= 'lightyellow';
});
headOne.addEventListener('mouseout',function(){
    headOne.textContent = "HOVER OVER ME";
    headOne.style.color= 'black';
});
headTwo.addEventListener("click", function(){
    headTwo.textContent = 'CLICKED ON';
    headTwo.style.color = 'lightblue';
});
headThree.addEventListener('dblclick',function(){
    headThree.textContent = "DOUBLE CLICKED ON";
    headThree.style.color = "lightpink"
});