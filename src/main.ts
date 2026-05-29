import './style.css'
import { pagesHomeDesktop, pagesHomeMobile } from './pages/home/home'
import { pagesNetworking } from './pages/networking/networking';
import { pagesJobsDesktop, pagesJobsMobile } from './pages/job-portal/job-portal';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  
<main id="main-content">

${pagesHomeDesktop()}
${pagesHomeMobile()}
${pagesNetworking()}
${pagesJobsDesktop()}
${pagesJobsMobile()}
  
</main>

`;

