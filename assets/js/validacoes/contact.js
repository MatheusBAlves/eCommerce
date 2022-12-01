export function valida(input) {
    const tipoDeInput = input.dataset;
    if(tipoDeInput.contact){
        if(contactValidity[tipoDeInput.contact]){
        contactValidity[tipoDeInput.contact](input);
        };
    }

}

const contactValidity = {
    name: input => contactNameValidity(input),
    text: input => contactTextValidity(input)
}

const contactNameValidity = (input) => {
    console.log(input.value)
}

const contactTextValidity = (input) => {
    console.log(input.value)
}