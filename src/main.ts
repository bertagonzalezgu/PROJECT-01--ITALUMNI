import './style.css'
import { pagesHomeDesktop, pagesHomeMobile } from './pages/home/home'
// import { pagesNetworking } from './pages/networking/networking';
// import { pagesJobsDesktop, pagesJobsMobile } from './pages/job-portal/job-portal';
import { navBar } from './components/nav-bar'
import { splash } from './components/splash/splash'
// import { statusBar } from './components/status-bar/status-bar'
import { footer } from './components/footer/footer';
// import { tabBar } from './components/tab-bar/tab-bar';
// import { topBarMobile, topBarDesktop } from './components/top-bar/top-bar';
// import { signUp } from './components/sign-up/sign-up';


document.querySelector<HTMLDivElement>('#app')!.innerHTML =  /* html*/ `

<main id="main-content">

  <div id="splash">${splash()}</div>
  <div id="home-mobile" class="hidden">${pagesHomeMobile()}</div>

  ${navBar()}

  <div id="home-desktop">${pagesHomeDesktop()}</div>
  
  ${footer()}
</main>
`;

