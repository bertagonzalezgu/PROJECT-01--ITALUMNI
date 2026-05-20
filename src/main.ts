import { pagesHome } from './pages/home/home'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

${pagesHome()}
  
  <main id="main-content">
    </main>

`;

