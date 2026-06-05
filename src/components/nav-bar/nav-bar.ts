import './nav-bar.css';

interface NavBarPropsDesktop{
    activePage: 'home' | 'networking' | 'jobs';
}

export function navBar(props: NavBarPropsDesktop): string{

    return /* html*/ `
    <nav class="nav">
        <div class="nav__box">
          <img class="nav__box-img" src="/src/assets/img/Header.svg" alt="Logo Alumni">
        
        <div class="nav__pages">
              <ul>
                <li id="nav-home" class="nav__item
                  ${props.activePage === 'home' ? 'nav__item--active' : ''}">
                  <a href="#">Inici</a></li>
                <li id="nav-networking" class="nav__item
                  ${props.activePage === 'networking' ? 'nav__item--active' : ''}">
                  <a href="#">Xarxa</a></li>
                <li id="nav-jobs" class="nav__item
                  ${props.activePage === 'jobs' ? 'nav__item--active' : ''}">
                  <a href="#">Oportunitats de feina</a></li>
              </ul>
            </div>
        </div>
        <div class="nav__buttons">
          <button class="btn-nav btn--white" data-action="sign-up"><img src="/src/assets/icons/card.png" alt="Icono carta">Apunta't</button>
          <button class="btn-nav btn--color"><img src="/src/assets/icons/user.png" alt="Icono usuario">Com et veuen?</button>
        </div>
        
    </nav>
    `;
}