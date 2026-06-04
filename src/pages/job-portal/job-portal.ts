import './job-portal.css'
import { jobs } from '../../data/jobs';

export function pagesJobsDesktop(): string{

    const jobCards = jobs.map(job => `
      <div class="card-jobs" data-title="${job.title.toLowerCase()}" data-type="${job.type.toLowerCase()}">
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
      <div class="container-jobs">
        
          <h1 class="cards-grid__title">Ofertes de feina</h1>

        <section class="cards-grid">

          ${jobCards}

        </section>
      </div>
    `;
}

export function pagesJobsMobile(): string{

    const jobCards = jobs.map(job => `
      <div class="card" data-title="${job.title.toLowerCase()}" data-type="${job.type.toLowerCase()}">
        <div class="card-body__text">
          <h3>${job.title}</h3>
          <p>${job.company}</p>
          <p>${job.location} | Sol·licita abans del ${job.deadline}</p>
          <button class="btn btn-primary">Aplica Ara</button>
        </div>
        <img class="card-body__image" src="${job.image}" alt="${job.alt}">
      </div>
    `).join('');

    return /* html*/ `
    <div class="container-jobs">
        
          <h1 class="cards-grid__title">Ofertes de feina</h1>

        <section class="cards-grid">

          ${jobCards}

      </section>
      </div> 
    `;
}