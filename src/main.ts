import './style.css'
import { navBar } from './components/nav-bar';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

${navBar()}
  
  <main id="main-content">
    </main>
`;
