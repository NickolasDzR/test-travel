import Imask from 'imask';

if (document.querySelector('.input-phone')) {
    var phoneMask = IMask(
        document.querySelector('.input-phone'), {
            mask: '+{7}000 000 00 00'
        });
}

const btnForm = document.querySelector('.btn_form');
const inputName = document.querySelector('.input-name');
const inputDestination = document.querySelector('.input-destination');

const createMessage = (label, input) => {
    const requiredMessage = document.createElement('Span');
    requiredMessage.classList.add("required-message", "animated", "shake");
    requiredMessage.innerHTML = input.dataset.message;
    label.appendChild(requiredMessage);
}

// animated shake"

const regExWords = new RegExp(/^[^\d@#&<>\"~;$^%{}\-.\d?]+$/);

const checkEmptyInput = () => {
    if (inputName.value.length === 0) {
        const label = inputName.parentElement;
        inputName.classList.add('input-required');
        createMessage(label, inputName);
    }
    if (inputDestination.value.length === 0) {
        const label = inputDestination.parentElement;
        inputDestination.classList.add('input-required');
        createMessage(label, inputDestination);
    }
}

const checkValidation = () => {
    if (regExWords.test(inputName.value) === false && inputName.value.length > 0 || regExWords.test(inputDestination.value) === false && inputDestination.value.length > 0) {
        if (regExWords.test(inputName.value) === false) {
            const label = inputName.parentElement;
            const requiredMessage = document.createElement('SPAN');
            requiredMessage.classList = "required-message animated shake"
            requiredMessage.innerHTML = 'Только буквы';
            label.appendChild(requiredMessage);
        }
        if (regExWords.test(inputDestination.value) === false) {
            const label = inputDestination.parentElement;
            const requiredMessage = document.createElement('SPAN');
            requiredMessage.classList = "required-message animated shake"
            requiredMessage.innerHTML = 'Только буквы';
            label.appendChild(requiredMessage);
        }
    }
}

const checkedInput = document.querySelector('.checkbox_required');
const formBack = document.querySelector('.formback__form');

const checkSpanRequire = () => {
    if (inputName.nextElementSibling || inputDestination.nextElementSibling) {
        if (inputName.nextElementSibling) {
            inputName.nextElementSibling.remove();
        }
        if (inputDestination.nextElementSibling) {
            inputDestination.nextElementSibling.remove();
        }
    }
}

if (document.querySelector('.btn_form')) {
    btnForm.addEventListener('click', (e) => {
        e.preventDefault();
        checkSpanRequire();
        if (inputName.value.length === 0 || inputDestination.value.length === 0) {
            checkEmptyInput();
        }
        if (inputName.value.length > 0 || inputDestination.value.length > 0) {
            checkValidation();
        }
        if (checkedInput.nextElementSibling.classList[1] !== 'input-required') {
            if (checkedInput.checked === false) {
                checkedInput.nextElementSibling.classList.add('input-required');
            }
        }
    });
}

if (document.querySelector('.checkbox_required')) {
    checkedInput.addEventListener('click', (e) => {
        const inputClassLength = e.target.nextElementSibling.classList;
        for (let i = 0; i < inputClassLength.length; i += 1) {
            if (inputClassLength[i] === 'input-required') {
                inputClassLength.remove('input-required');
            }
        }
    });
}

const deleteRequiredSpan = (e) => {
    if (e.target.parentElement.querySelector('.required-message') !== null) {
        const requiredMessage = e.target.nextElementSibling;
        setTimeout(() => {
            requiredMessage.remove();
        }, 1000)
        e.target.nextElementSibling.classList.add('fadeOut');
        e.target.classList.remove('input-required');
    }
}

document.addEventListener('input', (e) => {
    deleteRequiredSpan(e);
})