import { userServices } from "../../services/user-services.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const email = document.querySelector('[data-email]');
        const password = document.querySelector('[data-password]');

        const users = await userServices.userList();
        if (email.value == users.email && password.value == users.password) {
            window.location.href = "http://127.0.0.1:5500/produtosAdmin.html"
        } else {
            window.alert("Dados incorretos!");
            email.value = "";
            password.value = "";
        }
    }
    catch (err) {
        console.log(err);
    }
})
