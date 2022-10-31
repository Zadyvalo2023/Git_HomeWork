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
    };

    document.addEventListener('DOMContentLoaded', function(){
        let textArea = document.querySelector('#text');
        let button = document.querySelector('#count-button');
        let result = document.querySelector('#result');
        button.addEventListener('click', function(){
            let text = textArea.value;
            let wordsCount = countWords(text);
            result.innerHTML = '<b>Длина текста:</b> ' +
                text.length + ' символов<br>' +
                '<b>Количество слов:</b> ' + wordsCount;
        });
    });
}());