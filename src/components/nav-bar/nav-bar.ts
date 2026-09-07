import './nav-bar.css';

import headerLogo from './assets/img/Header.svg';
import cardIcon from './assets/icons/card.png';
import userIcon from './assets/icons/user.png';

interface NavBarPropsDesktop {
  activePage: 'home' | 'networking' | 'jobs';
}

export function navBar(props: NavBarPropsDesktop): string {
  return /* html */ `
    <nav class="nav">
        <div class="nav__box">
          <img class="nav__box-img" src="${headerLogo}" alt="Logo Alumni">
        
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
          <button class="btn-nav btn--white" data-action="sign-up"><img src="${cardIcon}" alt="Icono carta">Apunta't</button>
          <button class="btn-nav btn--color"><img src="${userIcon}" alt="Icono usuario">Com et veuen?</button>
        </div>
        
    </nav>
    `;
}