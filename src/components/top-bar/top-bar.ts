import './top-bar.css'

interface TopBarPropsMobile{
    title: string;
    showBack: boolean;
    showSearch: boolean;
    showFilters: boolean;
}

interface TopBarPropsDesktop{
    activePage: 'home' | 'networking' | 'jobs';
}

export function topBarMobile(props: TopBarPropsMobile): string{

    return /* html*/ `
    
    <div class="topbar 
        ${props.showBack ? '.topbar--has-back' : ''}
        ${props.showSearch ? '.topbar--has-search' : ''}
        ${props.showFilters ? '.topbar--has-filters' : '' }
    ">

        <div class="topbar__row">
          <button class="topbar__back" onclick="goBack()" aria-label="atrás"><img src="src/assets/icons/top-bar/row/arrow-left.svg" alt="arrow left icon"></button>
    
          <h1 class="topbar__title">Home</h1>
    
          <div class="topbar__actions">
            <div class="topbar__icon topbar__icon--filter"><img src="src/assets/icons/top-bar/row/filtres.svg" alt="filter icon"></div>
            <div class="topbar__icon topbar__icon--avatar"><img src="src/assets/icons/top-bar/row/Avatar.jpg" alt="user profile image"></div>
          </div>
        </div>

        <div class="topbar__search">
          <span class="topbar__search-icon"><img src="src/assets/icons/top-bar/search-bar/Search.svg" alt="search icon"></span>
          <input type="text" placeholder="Search alumni..." aria-label="Buscar alumni" />
        </div>

        <div class="topbar__filters">
          <button class="topbar__filter-btn">
            <img src="src/assets/icons/top-bar/job-portal_filters/filter.svg" alt="filter icon">
            <span>Industry \/</span>
          </button>
          <button class="topbar__filter-btn">
            <img src="src/assets/icons/top-bar/job-portal_filters/filter.svg" alt="">
            <span>Experience Level \/</span>
          </button>
        </div>

      </div>
    `;
}


export function topBarDesktop(props: TopBarPropsDesktop): string{

    return /* html*/ `
    
    <nav class="nav">

        <div class="nav__box">

          <div class="nav__box-logo">
            <img class="nav__box-logo-img" src="/src/assets/icons/top-bar/logo_desktop.svg" alt="Logo">
            <p class="nav__brand-name">Alumni Connect</p> 
          </div>
                

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

        <div class="nav__actions">
          <img src="/src/assets/icons/top-bar/search-bar/Search.svg"   alt="search">
          <img src="/src/assets/icons/top-bar/nav-icons_desktop/bell.svg"     alt="notifications">
          <img src="/src/assets/icons/top-bar/nav-icons_desktop/settings-gear.svg" alt="settings">
          <img src="/src/assets/icons/top-bar/row/Avatar.jpg"
              alt="avatar" class="nav__avatar">
        </div>

    </nav>
    
    `;
}
