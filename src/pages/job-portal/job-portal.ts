import './job-portal.css'
import { jobs } from '../../data/jobs';

export function pagesJobsDesktop(): string{

    const jobCards = jobs.map(job => `
      <div class="card" data-title="${job.title.toLowerCase()}" data-type="${job.type.toLowerCase()}">
        <div class="card-body__text">
          <h3>${job.title}</h3>
          <p>${job.type}</p>
          <p>Publicat ${job.date}</p>
          <button class="btn btn-primary">Aplica Ara</button>
        </div>
        <img class="card-body__image" src="${job.image}" alt="${job.alt}">
      </div>
    `).join('');

    return `
      <div class="container">
        
          <h1 class="cards-grid__title">Ofertes de feina</h1>

        <section class="cards-grid">

          ${jobCards}

        </section>
      </div>
    `;
}

export function pagesJobsMobile(): string{

    return /* html*/ `
    <div class="container">
        
          <h1 class="cards-grid__title">Ofertes de feina</h1>

        <section class="cards-grid">

          <div class="card">
            <div class="card-body__text">
              <h3>Rol de Màrketing</h3>
              <p>Especialista de Màrketing a XYZ</p>
              <p>Remot | Sol·licita abans del 15 de novembre</p>
              <button class="btn btn-primary">Aplica Ara</button>
            </div>
            <img class="card-body__image" src="src/assets/img/jobs-desktop/marketing.jpg" alt="reunion of workmates at the office">           
          </div>

          <div class="card">
            <div class="card-body__text">
              <h3>Enginyer de Software</h3>
              <p>Enginyer de Software a ABC</p>
              <p>San Francisco | Sol·licita abans del 20 de novembre</p>
              <button class="btn btn-primary">Aplica Ara</button>
            </div>
              <img class="card-body__image" src="src/assets/img/jobs-desktop/software-enginyer.jpg" alt="computer on a desk">
          </div>

          <div class="card">
            <div class="card-body__text">
              <h3>Analista Clínic</h3>
              <p>Analista clínic a MediCare</p>
              <p>Nova York | Sol·licita abans del 30 de novembre</p>
              <button class="btn btn-primary">Aplica Ara</button>
            </div>
              <img class="card-body__image" src="src/assets/img/jobs-desktop/data.jpg" alt="professor in a class">
          </div>

          <div class="card">
            <div class="card-body__text">
              <h3>Redactor de continguts</h3>
              <p>Redactor de continguts a WritersHub</p>
              <p>Remote | Sol·licita abans del 5 de desembre</p>
              <button class="btn btn-primary">Aplica Ara</button>
            </div>
              <img class="card-body__image" src="src/assets/img/jobs-desktop/data.jpg" alt="professor in a class">
          </div>

      </section>
      </div> 
    `;
}