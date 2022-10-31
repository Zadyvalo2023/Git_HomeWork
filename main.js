document.addEventListener('DOMContentLoaded', function(){
    let textArea = document.querySelector('#text');
    let button = document.querySelector('#count-button');
    let result = document.querySelector('#result');
    button.addEventListener('click', function(){
        let text = textArea.value;
        result.innerHTML = '<b>Длина текста: </b>' +
            text.length + ' символов';
    });
});