const inputs = document.querySelectorAll('input');
let textArea = document.querySelector('textarea');

function inp() {
    let temp = '';

    for (let iterator of inputs) {
        temp += `${iterator.value}, `;
    }
    return temp
}

function putInTextArea() {
    textArea.value = '';
    textArea.value += inp().replace(/,\s*$/, "")

    return textArea.value
}

setInterval(() => {
    putInTextArea()
}, 3000);










// console.log(inputs)





