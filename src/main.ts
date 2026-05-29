import './style.css'
import './style.css'
import { pagesHomeDesktop, pagesHomeMobile } from './pages/home/home'
import { pagesNetworking } from './pages/networking/networking';
import { pagesJobsDesktop, pagesJobsMobile } from './pages/job-portal/job-portal';
import { navBar } from './components/nav-bar'
import { statusBar } from './components/status-bar/status-bar'
import { footer } from './components/footer/footer';
import { tabBar } from './components/tab-bar/tab-bar';
import { topBarMobile, topBarDesktop } from './components/top-bar/top-bar';
import { signUp } from './components/sign-up/sign-up';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<main id="main-content">

${statusBar()}
${navBar()}
${topBarMobile({
  title: 'Home',
  showBack: false,
  showSearch: true,
  showFilters: false,
})}

${topBarDesktop({
  activePage: 'home'
})}

${pagesHomeDesktop()}
${pagesHomeMobile()}
${pagesNetworking()}
${pagesJobsDesktop()}
${pagesJobsMobile()}

${signUp()}

${footer()}
${tabBar()}
  
  
    </main>
`;
