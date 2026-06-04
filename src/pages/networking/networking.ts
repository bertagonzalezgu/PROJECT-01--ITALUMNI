import './networking.css';
import { alumni } from '../../data/alumni'; //importar base de dades

export function pagesNetworking(): string {

  const alumniCards = alumni.map(p => `
    <div class="card" data-name="${p.name.toLowerCase()}" data-role="${p.role.toLowerCase()}">
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="role">${p.role}</p>
        <p class="location">${p.location}</p>
      </div>
      <button class="btn btn-primary">Missatge</button>
    </div>
    `).join('')

    return /* html*/ `
    <div class="container-networking">
  
      <section class="top-bar-section-desktop">
        <div class="search-desktop">
          <img src="src/assets/icons/Search.svg" alt="search icon">
          <input type="text" placeholder="Buscar alumni..." class="search-input-desktop">
        </div>
        
        <div class="filters-desktop">
          <span>Filtres:</span>
          <button class="btn-filter" data-filter="recent">Activitats recents</button>
          <button class="btn-filter" data-filter="popular">Popular</button>
          <button class="btn-filter" data-filter="connected">Més connectats</button>
        </div>
      </section>

      <section class="cards-grid hidden" id="alumni-grid">
        
        ${alumniCards}

      </section>

      <div class="panels-layout">
        
        <section class="panel-activity">
          <h2>Activitats recents</h2>
          <ul class="activity-list">
            <li>Jane Smith ha començat a seguir a John Doe</li>
            <li>David Brown i John Doe han connectat</li>
            <li>John Doe ha compartit "Top 10 Product Management Tips"</li>
            <li>Jane Smith i David Brown han connectat</li>
          </ul>
        </section>

        <section class="panel-suggestions">
          <h2>Sugeriments per a tu</h2>
          <div class="suggestions-list">
            
            <div class="card">
              <div class="card-body">
                <h3>Sarah Johnson</h3>
                <p class="role">Marketing Director a GreenWave</p>
                <p class="generation">Class of 2015</p>
              </div>
              <button class="btn btn-secondary">Connectar</button>
            </div>

            <div class="card">
              <div class="card-body">
                <h3>Emily Davis</h3>
                <p class="role">Research Scientist a BioTech Labs</p>
                <p class="generation">Class of 2012</p>
              </div>
              <button class="btn btn-secondary">Connectar</button>
            </div>
            
            <div class="card">
              <div class="card-body">
                <h3>James Lee</h3>
                <p class="role">Managing Partner at Lee & Associates</p>
                <p class="generation">Class of 2005</p>
              </div>
              <button class="btn btn-secondary">Connectar</button>
            </div>

            <div class="card">
              <div class="card-body">
                <h3>Michael Brown</h3>
                <p class="role">Founder of EduLearn Academy</p>
                <p class="generation">Class of 2008</p>
              </div>
              <button class="btn btn-secondary">Connectar</button>
            </div>

          </div>
        </section>
      </div>
    
    </div>
    `;
}

