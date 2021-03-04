
var aElem = document.querySelector('a');

aElem.addEventListener('mouseover', function modifiColor(){
    aElem.style.color = 'green';
    aElem.style.fontWeight = 'bold';
});

aElem.addEventListener('mouseout', function backColor(){
    aElem.style.color = 'black';
    aElem.style.fontWeight = 'normal';
})
// call the functions and connect them to an event
