import './style.css'
import { pagesHomeDesktop, pagesHomeMobile } from './pages/home/home'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  
<main id="main-content">

${pagesHomeDesktop()}
${pagesHomeMobile()}
  
    </main>

`;

