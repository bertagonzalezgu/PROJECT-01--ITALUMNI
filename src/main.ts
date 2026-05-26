import './style.css'
import { navBar } from './components/nav-bar'
import { statusBar } from './components/status-bar/status-bar'
import { footer } from './components/footer/footer';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

${navBar()}
${statusBar()}
${footer()}
  
  <main id="main-content">
    </main>
`;
