export function valida(input) {
    const tipoDeInput = input.dataset;
    console.log(tipoDeInput, tipoDeInput.tipo)

    if (validadores[tipoDeInput.tipo]) {
        validadores[tipoDeInput.tipo](input);
    };


    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input_error_message').innerHTML = '';
    } else {
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input_error_message').innerHTML = mostraMensagemErro(tipoDeInput.tipo, input);
    }

}

const tiposDeErro = [
    'valueMissing',
    'customError',
    'typeMismatch'
]

const mensagensDeErro = {
    contact_name: {
        valueMissing: 'O campo nome não pode estar vazio',
        customError: 'O campo deve ser menor que 40 caracteres'
    },
    contact_text: {
        valueMissing: 'O campo mensagem não pode estar vazio',
        customError: 'O campo deve ser menor que 120 caracteres'
    },
    login_email: {
        valueMissing: 'O campo mensagem não pode estar vazio',
        typeMismatch: 'O campo deve conter:<br> o caractere @<br> seguido por um domínio <br>seguido por ponto'
    },
    login_password: {
        valueMissing: 'O campo mensagem não pode estar vazio'
    }
}

const validadores = {
    contact_name: input => contactNameValidity(input),
    contact_text: input => contactTextValidity(input)
}

function mostraMensagemErro(tipoDeInput, input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            console.log(tipoDeInput)
            mensagem = mensagensDeErro[tipoDeInput][erro];
        }
    })
    return mensagem;
}

const contactNameValidity = (input) => {
    let mensagem = ''
    if (input.value.length > 40) {
        mensagem = 'O campo deve ser menor que 40 caracteres';
    }
    input.setCustomValidity(mensagem);
}

const contactTextValidity = (input) => {
    let mensagem = ''
    if (input.value.length > 120) {
        mensagem = 'O campo deve ser menor que 120 caracteres';
    }
    input.setCustomValidity(mensagem);
}