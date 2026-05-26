import './style.css'
import { navBar } from './components/nav-bar'
import { statusBar } from './components/status-bar/status-bar'
import { footer } from './components/footer/footer';
import { tabBar } from './components/tab-bar/tab-bar';
import { topBarMobile, topBarDesktop } from './components/top-bar/top-bar';

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

${footer()}
${tabBar()}
  
  
    </main>
`;
