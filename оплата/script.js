const card = document.getElementById('plasticCard');

function flipCard() {
    card.classList.toggle('flipped');
}

const inputNumber = document.getElementById('input-number');
const viewNumber = document.getElementById('view-number');

const inputName = document.getElementById('input-name');
const viewName = document.getElementById('view-name');

const inputExpiry = document.getElementById('input-expiry');
const viewExpiry = document.getElementById('view-expiry');

const inputCvv = document.getElementById('input-cvv');
const viewCvv = document.getElementById('view-cvv');

inputNumber.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let parts = [];

    for (let i = 0, len = value.length; i < len; i += 4) {
        parts.push(value.substring(i, i + 4));
    }

    if (parts.length > 0) {
        e.target.value = parts.join(' ');
    } else {
        e.target.value = value;
    }

    viewNumber.innerText = e.target.value || '•••• •••• •••• ••••';
});

inputName.addEventListener('input', (e) => {
    let value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); 
    e.target.value = value;
    viewName.innerText = value.toUpperCase() || 'YOUR NAME';
});

inputExpiry.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\//g, '').replace(/[^0-9]/gi, '');
    if (value.length > 2) {
        e.target.value = value.substring(0, 2) + '/' + value.substring(2, 4);
    } else {
        e.target.value = value;
    }
    viewExpiry.innerText = e.target.value || 'MM/YY';
});

inputCvv.addEventListener('input', (e) => {
    let value = e.target.value.replace(/[^0-9]/gi, '');
    e.target.value = value;
    viewCvv.innerText = value || '•••';
});

inputCvv.addEventListener('focus', () => {
    card.classList.add('flipped');
});

inputCvv.addEventListener('blur', () => {
    card.classList.remove('flipped');
});

document.querySelector('.card-form').addEventListener('click', (e) => {
    e.stopPropagation();
});
