import { valida } from "./validity.js";

const inputs = document.querySelectorAll('input');
const textAreas = document.querySelectorAll('textarea');

inputs.forEach(input => {
    input.addEventListener('blur', (e) => {
        valida(e.target);
    });
    // input.addEventListener('keyup', (e) => {
    //     valida(e.target);
    // });
})

textAreas.forEach(textarea => {
    textarea.addEventListener('blur', (e) => {
        valida(e.target);
    });
    // textarea.addEventListener('keyup', (e) => {
    //     valida(e.target);
    // });
})
