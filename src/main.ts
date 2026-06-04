import './style.css'
import { pagesHomeDesktop, pagesHomeMobile } from './pages/home/home'
import { pagesNetworking } from './pages/networking/networking';
import { pagesJobsDesktop, pagesJobsMobile } from './pages/job-portal/job-portal';
import { navBar } from './components/nav-bar/nav-bar'
import { splash } from './components/splash/splash'
import { statusBar } from './components/status-bar/status-bar'
import { footer } from './components/footer/footer';
import { tabBar } from './components/tab-bar/tab-bar';
import { topBarMobile, topBarDesktop} from './components/top-bar/top-bar';
import { signUp } from './components/sign-up/sign-up'


document.querySelector<HTMLDivElement>('#app')!.innerHTML =  /* html*/ `

<main id="main-content">

  <div id="splash" class="hidden">${splash()}</div>
  <div id="sign-up" class="hidden">${signUp()}</div>

  <div id="status-bar" class="hidden">${statusBar()}</div>
  <div id="top-bar-mobile" class="hidden">${topBarMobile({ 
    title: 'Home', 
    showBack: false, 
    showSearch: true, 
    showFilters: false 
  })}</div>

  <div id="nav-bar" class="hidden">${navBar({ 
    activePage: 'home'
  })}</div>

  <div id="top-bar-desktop" class="hidden">${topBarDesktop({ 
    activePage: 'home'
  })}</div>

  <div id="home-mobile" class="hidden">${pagesHomeMobile()}</div>
  <div id="home-desktop" class="hidden">${pagesHomeDesktop()}</div>
  <div id="networking" class="hidden">${pagesNetworking()}</div>
  <div id="jobs-mobile" class="hidden">${pagesJobsMobile()}</div>
  <div id="jobs-desktop" class="hidden">${pagesJobsDesktop()}</div>

  <div id="footer" class="hidden">${footer()}</div>

  <div id="tab-bar" class="hidden">${tabBar()}</div>

</main>
`;

let isUserRegistered = false;

const pages = [
  {id: 'splash', needRegister: false},
  {id: 'sign-up', needRegister: false},
  {id: 'home-desktop', needRegister: false},
  {id: 'home-mobile', needRegister: true},
  {id: 'networking', needRegister: true},
  {id: 'jobs-desktop', needRegister: true},
  {id: 'jobs-mobile', needRegister: true}
]

// Funciones auxiliares:

function hideAllPages(){
  pages.forEach((page) => {
    const element = document.getElementById(page.id);
    if (element !== null) {
      element.classList.add('hidden');
    }
  });

  document.getElementById('nav-bar')!.classList.add('hidden');
  document.getElementById('top-bar-desktop')!.classList.add('hidden');
  document.getElementById('footer')!.classList.add('hidden');
  document.getElementById('status-bar')!.classList.add('hidden');
  document.getElementById('top-bar-mobile')!.classList.add('hidden');
  document.getElementById('tab-bar')!.classList.add('hidden');
}

function showSignUp(){
  hideAllPages();
  document.getElementById('nav-bar')!.classList.add('hidden');
  document.getElementById('sign-up')!.classList.remove('hidden');
}

// Lógica de navegación:

function navTo(section: string){
  console.log('navTo:', section, 'isUserRegistered:', isUserRegistered)
  const targetPage = pages.find(p => p.id === section || (section === 'home' && p.id === 'home-desktop'))
  console.log('targetPage:', targetPage)
  if(targetPage?.needRegister === true && isUserRegistered === false){
      showSignUp() 
      return; 
  }

  hideAllPages();

  const isMobile = window.innerWidth < 768;

  switch(section){

    case 'home':
      if(isMobile === true){
      document.getElementById('home-mobile')!.classList.remove('hidden');
    } else{
      document.getElementById('home-desktop')!.classList.remove('hidden');
      document.getElementById('nav-bar')!.classList.remove('hidden');
      document.getElementById('footer')!.classList.remove('hidden');
    }
    break;

    case 'networking':
      document.getElementById('networking')!.classList.remove('hidden');
      if(isMobile === true){
        document.getElementById('tab-bar')!.classList.remove('hidden');
        document.getElementById('status-bar')!.classList.remove('hidden');
        document.getElementById('top-bar-mobile')!.classList.remove('hidden');
    } else{
        document.getElementById('top-bar-desktop')!.classList.remove('hidden');
        document.getElementById('footer')!.classList.remove('hidden');
    }
    break;

    case 'jobs':
      if(isMobile === true){
      document.getElementById('jobs-mobile')!.classList.remove('hidden');
    } else{
      document.getElementById('jobs-desktop')!.classList.remove('hidden');
    }
    break;

    case 'sign-up':
      document.getElementById('sign-up')!.classList.remove('hidden');
    break;

    case 'splash':      
      document.getElementById('splash')!.classList.remove('hidden');
    break;

    default:
      console.log("This section doesn't exist")
  }
  
}

// Botones:

const btnSplash = document.querySelector('.btn--large');
if(btnSplash !== null){
  btnSplash.addEventListener('click', () => {
    navTo('sign-up')
  });
}

const btnRegister = document.querySelector('.btn-register');
if(btnRegister !== null){
  btnRegister.addEventListener('click', () => {
    console.log('btnRegister clicat!')
    isUserRegistered = true;

    if(window.innerWidth < 768){
      document.getElementById('tab-bar')!.classList.remove('hidden');
      document.getElementById('status-bar')!.classList.remove('hidden');
    } else{
      document.getElementById('nav-bar')!.classList.add('hidden');
      document.getElementById('top-bar-desktop')!.classList.remove('hidden');
      document.getElementById('footer')!.classList.remove('hidden');
    }

    navTo('home');
  });
}

const btnHeroHome = document.querySelector('.home-hero__btn--color')

if(btnHeroHome !== null){
  btnHeroHome.addEventListener('click', () => {
    showSignUp()
  });
}

// Para arrancar con diferentes páginas y componentes des de desktop y mobile:

const startMobileApp = window.innerWidth < 768;

if (startMobileApp === true) {
  navTo('splash');
} else {
  document.getElementById('nav-bar')!.classList.remove('hidden');
  document.getElementById('footer')!.classList.remove('hidden');  
  console.log("intentant veure el footer")

  navTo('home')
}

document.getElementById('nav-home')?.addEventListener('click', (e) => {
  e.preventDefault();
  navTo('home')
});
document.getElementById('nav-networking')?.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('nav-networking clicat!')
  navTo('networking')
});
document.getElementById('nav-jobs')?.addEventListener('click', (e) => {
  e.preventDefault();
  navTo('jobs')
});

