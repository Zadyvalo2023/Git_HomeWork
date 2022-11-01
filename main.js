(function(){
    let countSpaces = function(text) {
        let matches = text.matchAll(/\s/g);
        let count = 0;
        for(let match of matches) {
            count++;
        }
        return count;
    }

    document.addEventListener('DOMContentLoaded', function(){
        let textArea = document.querySelector('#text');
        let countButton = document.querySelector('#count-button');
        let result = document.querySelector('#result');
        let resetButton = document.querySelector('#reset-button');

        countButton.addEventListener('click', function(){
            let text = textArea.value;
            let withoutSpaces = text.length - countSpaces(text);
            result.innerHTML = '<b>Длина текста:</b> ' +
                text.length + ' символов<br>' +
                '<b>Без пробелов:</b> ' + withoutSpaces + '<br>';
        });

        textArea.addEventListener('keyup', function(){
            if (textArea.value.length > 0) {
                countButton.removeAttribute('disabled');
            } else {
                countButton.setAttribute('disabled', 'disabled');
            }
        });

        resetButton.addEventListener('click', function(){
            textArea.value = '';
        });
    });
}());