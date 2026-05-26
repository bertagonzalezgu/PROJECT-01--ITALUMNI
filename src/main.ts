import './style.css'
import { navBar } from './components/nav-bar'
import { statusBar } from './components/status-bar/status-bar'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

${navBar()}
${statusBar()}
  
  <main id="main-content">
    </main>
`;
