const range = document.querySelector('.inputRange');
const field = document.getElementById('num1');
const green = document.querySelector('.green');
const red = document.querySelector('.red');

field.addEventListener('input', function () {
    range.value = this.value;
});

range.addEventListener('input', function () {
    field.value = this.value;
    green.style.height = `${this.value}%`;
    if (this.value < 20) {
        red.style.height = `${2}%`;
    } else if (this.value > 20 && this.value < 50) {
        red.style.height = `${4}%`;
    } else if (this.value > 50 && this.value < 75) {
        red.style.height = `${6}%`;
    } else if (this.value > 75 && this.value < 100) {
        red.style.height = `${8}%`;
    }
});


















