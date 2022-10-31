document.addEventListener('DOMContentLoaded', function(){
    let textArea = document.querySelector('#text');
    let button = document.querySelector('#count-button');
    button.addEventListener('click', function(){
        let text = textArea.value;
        alert('Длина текста: ' + text.length + ' символов');
    });
});