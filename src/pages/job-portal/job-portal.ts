import './job-portal.css'
import { jobs } from '../../data/jobs';

export function pagesJobsDesktop(): string{

    const jobCards = jobs.map(job => `
    <div class="card" data-title="${job.title.toLowerCase()}" data-type="${job.type.toLowerCase()}">
      <div class="card-body__text">
        <h3>${job.title}</h3>
        <p>${job.type}</p>
        <p>${job.date}</p>
        <button class="btn btn-primary">Aplica Ara</button>
      </div>
    </div>
    `).join('');

    return `
    <div class="container">
        
          <h1 class="cards-grid__title">Ofertes de feina</h1>

        <section class="cards-grid">

          <div class="card">
            <div class="card-body__text">
              <h3>Enginyer de Software</h3>
              <p>Jornada completa</p>
              <p>Publicat fa 3 dies</p>
              <button class="btn btn-primary">Aplica Ara</button>
            </div>
            
              <img class="card-body__image" src="src/assets/img/jobs-desktop/software-enginyer.jpg" alt="computer on a desk">
          
          </div>

          <div class="card">
            <div class="card-body__text">
              <h3>Mànager de producte</h3>
              <p>Oportunitat en remot</p>
              <p>Publicat fa 1 setmana</p>
              <button class="btn btn-primary">Més Info</button>
            </div>
              <img class="card-body__image" src="src/assets/img/jobs-desktop/product.jpg" alt="architecture design">
          </div>

          <div class="card">
            <div class="card-body__text">
              <h3>Analista Data</h3>
              <p>Rol amb contracte</p>
              <p>Publicat fa 2 dies</p>
              <button class="btn btn-primary">Més Detalls</button>
            </div>
              <img class="card-body__image" src="src/assets/img/jobs-desktop/data.jpg" alt="professor in a class">
          </div>

          <div class="card">
            <div class="card-body__text">
              <h3>UX Designer</h3>
              <p>Flexibilitat horària</p>
              <p>Publicat fa 5 dies</p>
              <button class="btn btn-primary">Aplicar</button>
            </div>
              <img class="card-body__image" src="src/assets/img/jobs-desktop/ux.jpg" alt="girl on the sofa whit a computer">
          </div>

          <div class="card">
            <div class="card-body__text">
              <h3>Lideratge en Marketing</h3>
              <p>Jornada completa</p>
              <p>Publicat fa 1 dies</p>
              <button class="btn btn-primary">Comença</button>
            </div>
              <img class="card-body__image" src="src/assets/img/jobs-desktop/marketing.jpg" alt="reunion of workmates at the office">
          </div>

          <div class="card">
            <div class="card-body__text">
              <h3>Especialista RRHH</h3>
              <p>Jornada partida</p>
              <p>Publicat fa 4 dies</p>
              <button class="btn btn-primary">Més Detalls</button>
            </div>
              <img class="card-body__image" src="src/assets/img/jobs-desktop/hr.jpg" alt="empty office with sofas">
          </div>

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