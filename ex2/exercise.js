var pElement = document.getElementsByTagName('p')[1];

var bodyElement = document.querySelector('body');

window.addEventListener('resize', function(){
    var weight = window.innerWidth
    var height = window.innerHeight;

    pElement.innerHTML = 'The window is <strong>' + weight + ' pixel</strong> width and <strong>' + height + ' pixel height</strong>';

    if(weight === 500){
        bodyElement.style.backgroundColor = 'green';
    }else if(weight === 600){
        bodyElement.style.backgroundColor = 'blue';
    }else if(weight >= 700){
        bodyElement.style.backgroundColor = 'yellow';
    }
});