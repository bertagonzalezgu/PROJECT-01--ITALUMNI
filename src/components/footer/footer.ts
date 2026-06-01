import "../footer/footer.css";

export function footer(): string {

    return /* html*/ `
    <footer class="footer">
        <div class="footer__form-box">
          <h3>"No et perdis res, subscriu-te!"</h3>       
        <form class="footer__form">
          <div class="footer__input-box">
            <img src="/src/assets/icons/Mail.svg" alt="postal card icon" class="footer__input-icon">
            <input type="email" class="footer__input" placeholder="El teu email" required>
            <button type="submit" class="footer__btn-submit">Subscriu-te</button>
          </div>
        </form>
      </div>

      <div class="footer__nav-box">
        <img class="footer__logo" src="src/assets/img/Logo_invert.svg" alt="Logo Alumni negative">
        <div class="footer__links">
          <ul>
            <li>Sobre nosaltres</li>
            <li>Funcionalitats</li>
            <li>Centre d'ajuda</li>
            <li>Contacta'ns</li>
            <li>FAQs</li>
            <li>Oportunitats laborals</li>
          </ul>
        </div>
      </div>

      <hr class="footer__divider">

      <div class="footer__bottom">
        <div class="footer__select-language">
          <select name="" id="">
            <option value="ca">Català</option>
            <option value="es">Castellano</option>
            <option value="eng">English</option>
          </select>
        </div>

        <div class="footer__copyright">
          <p>© 2024 Brand, Inc. · Privadesa · Termes d'ús · Mapa del lloc</p>
        </div>

        <div class="footer__social-icons">
          <img src="src/assets/icons/LogoFacebook.svg" alt="Facebook icon">
          <img src="src/assets/icons/LogoLinkedin.svg" alt="Linkedin icon">
          <img src="src/assets/icons/LogoYoutube.svg" alt="Youtube icon">
        </div>
      </div>

      </footer>
    `;
}