import './style.css'
import { navBar } from './components/nav-bar';
import { footer } from './components/footer/footer';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

${navBar()}
${footer()}
  
  <main id="main-content">
    </main>
`;
