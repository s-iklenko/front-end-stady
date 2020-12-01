// const inputs = document.querySelectorAll('input');
// const inputs = document.getElementsByTagName("input");

const input_1 = document.getElementById('inp1');
const input_2 = document.getElementById('inp2');
const input_3 = document.getElementById('inp3');

const textArea = document.querySelector('textarea');

setInterval(input_1.onblur = function () {
    if (textArea.value = input_1.value) {
        textArea.value += ', ' + input_2.value + ', ' + input_3.value;
    }
}, 3000)






