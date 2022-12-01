const contact = document.querySelector('.contact');
const body = document.querySelector('body');

function createContact() {
    const content =
        `
        <div class="wrapper">
    <div class="referencia">
        <img src="./assets/logo.png" alt="" />
        <p><span>Alura</span>Geek</p>
    </div>
    <div class="links_uteis">
        <a href="#">Quem somos nós</a>
        <a href="#">Política de Privacidade</a>
        <a href="#">Programa de fidelidade</a>
        <a href="#">Nossas lojas</a>
        <a href="#">Quero ser franqueado</a>
        <a href="#">Anuncie aqui</a>
    </div>
          <form class="form">
            <p>Fale conosco</p>
            <div class="label_float">
              <input
                data-contact="name"
                type="text"
                name="nome"
                id="nome"
                class="input input_nome"
                placeholder="nome"
                required
                maxlength="40"
              />
              <label for="nome">Nome</label>
              <span class="contact_error_message">Este campo não é válido</span>
            </div>
            <div class="label_float">
              <textarea
                data-contact="text"
                name="mensagem"
                id="msg"
                cols="5"
                rows="5"
                placeholder="Escreva sua Mensagem"
                class="textarea textarea_msg"
                required
                maxlength="120"
              ></textarea>
              <span class="contact_error_message">Este campo não é válido</span>
            </div>
            <button type="submit" class="button">Enviar Mensagem</button>
          </form>
          </div>
    `;
    contact.innerHTML = content;
}

body.addEventListener('load', createContact());

