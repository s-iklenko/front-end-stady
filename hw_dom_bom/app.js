// const inputs = document.querySelectorAll('input');
// const inputs = document.getElementsByTagName("input");

const input_1 = document.getElementById('inp1').value;
const input_2 = document.getElementById('inp2').value;
const input_3 = document.getElementById('inp3').value;

const textArea = document.querySelector('textarea');


setInterval(() => {
    if (textArea.value = input_1) {
        textArea.value += ', ' + input_2 + ', ' + input_3;
    }
}, 3000)
