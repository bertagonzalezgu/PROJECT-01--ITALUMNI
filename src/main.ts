import './style.css'
import { pagesHomeDesktop, pagesHomeMobile } from './pages/home/home'
import { pagesNetworking } from './pages/networking/networking';
import { pagesJobsDesktop, pagesJobsMobile } from './pages/job-portal/job-portal';
import { navBar } from './components/nav-bar'
import { splash } from './components/splash/splash'
import { statusBar } from './components/status-bar/status-bar'
import { footer } from './components/footer/footer';
import { tabBar } from './components/tab-bar/tab-bar';
import { topBarMobile, topBarDesktop} from './components/top-bar/top-bar';
import { signUp } from './components/sign-up/sign-up'


document.querySelector<HTMLDivElement>('#app')!.innerHTML =  /* html*/ `

<main id="main-content">

  <div id="splash">${splash()}</div>
  <div id="sign-up" class="hidden">${signUp()}</div>

  <div id="status-bar" class="hidden">${statusBar()}</div>
  <div id="top-bar-mobile" class="hidden">${topBarMobile({ 
    title: 'Home', 
    showBack: false, 
    showSearch: true, 
    showFilters: false 
  })}</div>

  <div id="top-bar-desktop" class="hidden">${topBarDesktop({ 
    activePage: 'home'
  })}</div>

  <div id="home-mobile" class="hidden">${pagesHomeMobile()}</div>
  <div id="networking" class="hidden">${pagesNetworking()}</div>
  <div id="jobs-mobile" class="hidden">${pagesJobsMobile()}</div>
  
  <div id="tab-bar" class="hidden">${tabBar()}</div>

  <div id="nav-bar">${navBar()}</div>

  <div id="home-desktop">${pagesHomeDesktop()}</div>
  <div id="jobs-desktop" class="hidden">${pagesJobsDesktop()}</div>

  <div id="footer">${footer()}</div>
</main>
`;

document.querySelector('.btn-register')!.addEventListener('click', () => {
  document.getElementById('sign-up')!.classList.add('hidden');
  document.getElementById('home-mobile')!.classList.remove('hidden');
  document.getElementById('footer')!.classList.remove('hidden');
  document.getElementById('home-desktop')!.classList.remove('hidden');
  document.getElementById('nav-bar')!.classList.add('hidden');
  document.getElementById('tab-bar')!.classList.remove('hidden');
  document.getElementById('status-bar')!.classList.remove('hidden');
  document.getElementById('top-bar-mobile')!.classList.remove('hidden');
  document.getElementById('top-bar-desktop')!.classList.remove('hidden');

document.getElementById('nav-home')?.addEventListener('click', () => {
  document.getElementById('home-desktop')!.classList.remove('hidden');
  document.getElementById('networking')!.classList.add('hidden');
  document.getElementById('jobs-desktop')!.classList.add('hidden');
});

document.getElementById('nav-networking')?.addEventListener('click', () => {
  document.getElementById('home-desktop')!.classList.add('hidden');
  document.getElementById('networking')!.classList.remove('hidden');
  document.getElementById('jobs-desktop')!.classList.add('hidden');
});

document.getElementById('nav-jobs')?.addEventListener('click', () => {
  document.getElementById('home-desktop')!.classList.add('hidden');
  document.getElementById('networking')!.classList.add('hidden');
  document.getElementById('jobs-desktop')!.classList.remove('hidden');
});

});

document.querySelector('.btn--large')?.addEventListener('click', () => {
  document.getElementById('splash')!.classList.add('hidden');
  document.getElementById('sign-up')!.classList.remove('hidden');
  document.getElementById('footer')!.classList.add('hidden');
});

document.querySelector('.home-hero__btn--color')?.addEventListener('click', () => {
  document.getElementById('home-desktop')!.classList.add('hidden');
  document.getElementById('nav-bar')!.classList.add('hidden');
  document.getElementById('sign-up')!.classList.remove('hidden');
});

