const form = document.getElementById('form')
const formA = document.getElementById('formA')
const formB = document.getElementById('formB')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const formAValue = formA.value.trim()
    const formBValue = formB.value.trim()
    
    if(formAValue === '') {
        errorValidation(formA, 'Preencha este campo')
    } else if (formAValue >= formBValue) {
        errorValidation(formA, 'O Formulário A deve ser menor que o Formulário B.')
    }else {
        successValidation(formA)
    }

    if(formBValue === '') {
        errorValidation(formB, 'Preencha este campo')
    } else if (formBValue <= formAValue) {
        errorValidation(formB, 'O Formulário B deve ser maior que o Formulário A.')
    } else {
        successValidation(formB)
    }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}