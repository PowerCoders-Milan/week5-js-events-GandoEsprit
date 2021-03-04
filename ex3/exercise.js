var buttonIncrement = document.getElementsByTagName('button')[0];
var buttonDecrease = document.getElementsByTagName('button')[1];

var pElement = document.querySelector('p');

var pElementImg = document.createElement('p');
var imgElement = document.createElement('img');
imgElement.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/'
+'Princess_Bubblegum.png/100px-Princess_Bubblegum.png');
pElementImg.appendChild(imgElement);

var counter = 0;

buttonIncrement.addEventListener('click', function incrementCount(){
    counter++;
    pElement.innerHTML = 'Counter ' + counter;

    if(counter === 10){
        document.body.appendChild(pElementImg);
    }
})

buttonDecrease.addEventListener('click', function decreaseCount(){
    counter--
    pElement.innerHTML = 'Counter ' + counter;

    if(counter === -10){
        document.body.appendChild(pElementImg);
    }
})