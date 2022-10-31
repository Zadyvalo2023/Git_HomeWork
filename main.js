(function(){
    let countWords = function(text) {
        let wordRegex = /[a-zA-Zа-яА-Я0-9]/;
        let count = 0;
        let tokens = text.split(/\s+/);
        for(i in tokens) {
            if(tokens[i].match(wordRegex)) {
                count++;
            }
        }
        return count;
    }

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
        let button = document.querySelector('#count-button');
        let result = document.querySelector('#result');
        button.addEventListener('click', function(){
            let text = textArea.value;
            let wordsCount = countWords(text);
            let withoutSpaces = text.length - countSpaces(text);
            result.innerHTML = '<b>Длина текста:</b> ' +
                text.length + ' символов<br>' +
                '<b>Без пробелов:</b> ' + withoutSpaces + '<br>' +
                '<b>Количество слов:</b> ' + wordsCount;
        });
    });
}());