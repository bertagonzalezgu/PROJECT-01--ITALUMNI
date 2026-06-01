
export function navBar(): string {

    return /* html*/ `
    <nav class="nav">
        <div class="nav__box">
          <img src="/src/assets/img/Header.svg" alt="Logo Alumni" class="nav__box-img">
        
        <div class="nav__pages">
          <ul>
            <li>Inici</li>
            <li>Xarxa</li>
            <li>Oportunitats de Feina</li>
          </ul>
        </div>
        </div>
        <div class="nav__buttons">
          <button class="btn btn--white"><img src="/src/assets/icons/card.png" alt="Icono carta">Apunta't</button>
          <button class="btn btn--color"><img src="/src/assets/icons/user.png" alt="Icono usuario">Com et veuen?</button>
        </div>
        
    </nav>
    `;
}