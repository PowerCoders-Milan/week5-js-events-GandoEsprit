var inputElement = document.getElementById('name');

var pTag = document.createElement('p')

var obj = {dog: './images/dog.jpg', cat: './images/cat.jpg', turtle: './images/turtel.jpg'}

const keysObj = Object.keys(obj);

var imgTag = document.createElement('img');

var pTagImg = document.createElement('p');

inputElement.addEventListener('input', function(){
    pTag.innerHTML = inputElement.value;
    document.body.appendChild(pTag);

    keysObj.forEach(function(element){
        if(element === inputElement.value){
            imgTag.setAttribute('src', obj[element]);
            pTagImg.appendChild(imgTag);
            document.body.appendChild(pTagImg);
            break;
        }
    })
})