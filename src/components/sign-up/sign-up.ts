import "/Especialització_ItAcademy/PROJECTE 1 ITAlumni/first-itacademy-project-berta/src/components/sign-up/sign-up.css"

export function signUp(): string {

    return `
    <div class="card">
 
    <h1 class="card__title">Crea un compte</h1>
    <p class="card__subtitle">Uneix-te a nosaltres per connectar-te i compartir oportunitats!</p>

    <form>

      <label>
        <div class="field">
          <img src="src/assets/icons/sign-up/User.svg" alt="user icon">
          <input type="text" placeholder="Posa el teu nom"/>
        </div>
      </label>

      <label>
        <div class="field">
          <img src="src/assets/icons/sign-up/User.svg" alt="user icon">
          <input type="text" placeholder="Posa el teu cognom"/>
        </div>
      </label>

      <label>
        <div class="field">
          <img src="src/assets/icons/sign-up/Mail.svg" alt="postcard icon">
          <input type="email" placeholder="El teu correu electrònic"/>
        </div>
      </label>

      <label>
        <div class="field">
          <img src="src/assets/icons/sign-up/Frame.svg" alt="padlock icon">
          <input type="password" placeholder="Crea una contrasenya"/>
        </div>
      </label>

    </form>    
 
    <div class="terms terms__checkbox">
      <label>
      <input type="checkbox"> 
        Accepto els Termes i Condicions
      </label>
    </div>
 
    <button class="btn-register">Registra't</button>
 
    <div class="divider">
      <hr class="divider-line">O<hr class="divider-line">
    </div>

      <button class="btn-social btn-apple">
        <img src="src/assets/icons/sign-up/Apple.svg" alt="apple icon">
        Continua amb Apple
      </button>
 
    <button class="btn-social btn-google">
      <img src="src/assets/icons/sign-up/Google.svg" alt="google icon">
      Continua amb Google
    </button>
 
    <button class="btn-social btn-fb">
      <img src="src/assets/icons/sign-up/Logo facebook.svg" alt="facebook icon">
      Continua amb Facebook
    </button>  
 
    <p class="footer">Ja t'has registrat? <a href="#">Inicia sessió</a></p>
 
  </div>
</div>
    `;
}