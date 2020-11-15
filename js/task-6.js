const validInput = document.getElementById('validation-input');
validInput.addEventListener('change', event => {
    if (event.target.value.length === +validInput.dataset.length) {
        validInput.classList.add('valid');
        validInput.classList.remove('invalid');

    } else if (event.target.value.length === 0) {
        validInput.classList.remove('valid');
        validInput.classList.remove('invalid');
        
    } else {
        validInput.classList.remove('valid');
        validInput.classList.add('invalid');
    };
});