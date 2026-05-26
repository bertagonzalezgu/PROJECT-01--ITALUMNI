import './style.css'
import { navBar } from './components/nav-bar'
import { statusBar } from './components/status-bar/status-bar'
import { footer } from './components/footer/footer';
import { tabBar } from './components/tab-bar/tab-bar';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

${navBar()}
${statusBar()}
${footer()}
${tabBar()}
  
  <main id="main-content">
    </main>
`;
