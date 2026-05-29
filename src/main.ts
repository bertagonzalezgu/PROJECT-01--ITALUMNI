import './style.css'
import { pagesHomeDesktop, pagesHomeMobile } from './pages/home/home'
import { pagesNetworking } from './pages/networking/networking';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  
<main id="main-content">

${pagesHomeDesktop()}
${pagesHomeMobile()}
${pagesNetworking()}
  
    </main>

`;

