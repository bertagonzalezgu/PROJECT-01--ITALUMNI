import './splash.css'

export function splash(): string {
  return /*html */`
    <div class="splash">
    <div class="content-box">
      <img src="/src/assets/img/Header.svg" alt="Logo Alumni">
      <p>Connectant i empoderant a la nostra comunitat global d'alumnes</p>
    </div>  
      <button class="btn btn--large">Uneix-te</button>
    </div>
  `
}