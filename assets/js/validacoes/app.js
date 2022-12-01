import { valida } from "./contact.js";

const inputs = document.querySelectorAll('input');
const textAreas = document.querySelectorAll('textarea');

inputs.forEach(input => {
    input.addEventListener('blur', (e) => {
        valida(e.target);
    });
})

textAreas.forEach(textarea => {
    textarea.addEventListener('blur', (e) => {
        valida(e.target);
    });
})