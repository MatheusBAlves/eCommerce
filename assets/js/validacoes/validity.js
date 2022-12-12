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
        valueMissing: 'O campo login não pode estar vazio'
    },
    product_img:{
        valueMissing: 'O campo imagem não pode estar vazio'
    },
    product_section:{
        valueMissing: 'O campo categoria não pode estar vazio'
    },
    product_product:{
        valueMissing: 'O campo nome do produto não pode estar vazio',
        customError: 'O campo deve ser menor que 20 caracteres'
    },
    product_price:{
        valueMissing: 'O campo preço não pode estar vazio'
    },
    product_description:{
        valueMissing: 'O campo descrição não pode estar vazio',
        customError: 'O campo deve ser menor que 150 caracteres'
    },
}

const validadores = {
    contact_name: input => contactNameValidity(input),
    contact_text: input => contactTextValidity(input),
    product_product: input => productNameValidity(input),
    product_description: input => productDescriptionValidity(input)
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

const productNameValidity = (input) => {
    let mensagem = ''
    if (input.value.length > 20) {
        mensagem = 'O campo deve ser menor que 20 caracteres';
    }
    input.setCustomValidity(mensagem);
}

const productDescriptionValidity = (input) => {
    let mensagem = ''
    if (input.value.length > 150) {
        mensagem = 'O campo deve ser menor que 150 caracteres';
    }
    input.setCustomValidity(mensagem);
}