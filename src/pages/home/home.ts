
import "/Especialització_ItAcademy/PROJECTE 1 ITAlumni/first-itacademy-project-berta/src/pages/home/home.css";

export function pagesHome(): string {

    return `
    <main class="home-content">

        <section class="home-hero">

          <h1 class="home-hero__title">Benvingut, Alumni</h1>
          <p class="home-hero__text">Connectant i empoderant a la nostra comunitat global d'alumnes</p>

          <div class="home-hero__buttons">
            <button class="btn home-hero__btn--color">Uneix-te</button>
            <button class="btn home-hero__btn--white">Mira que fem</button>
          </div>

          <div class="home-hero__video-box">
          <video autoplay loop>
            <source src="src/assets/media/6948939-uhd_3840_2160_25fps.mp4" type="video/mp4">
            <source src="src/assets/media/6948939-uhd_3840_2160_25fps.webm" type="video/webm">
          </video>
          </div>

          <section>
            <div class="home-benefits">
              <h3 class="home-benefits__title">Què guanyes en formar-ne part?</h3>
              <div class="home-benefits-cards">
                <div class="home-benefits__card">
                <img src="src/assets/icons/Icon__Hat.svg" alt="Hat icon">
                <p class="home-benefits__text" >Comparteix i no perdis el contacte: Puja els teus moments importants, explica com va tot i queda amb els companys. Una xarxa per estar més a prop.</p>
                <button class="btn home-benefits__btn">Apunta't ja</button>
              </div>

              <div class="home-benefits__card">
                <img src="src/assets/icons/Icon__Comments.svg" alt="Comments icon">
                <p class="home-benefits__text" >Participa en discussions: Intercanvia coneixements, punts de vista i opinions sobre temes que t'interessen.</p>
                <button class="btn home-benefits__btn">Apunta't ja</button>
              </div>

              <div class="home-benefits__card">
                <img src="src/assets/icons/Icon__a-add.svg" alt="Add icon">
                <p class="home-benefits__text" >Xarxa Alumni: Connecta amb companys de promoció, fes noves amistats i crea records per durar tota la vida</p>
                <button class="btn home-benefits__btn">Apunta't ja</button>
              </div>
              </div>

            </div>
          </section>

          <section>
            <div class="home-testimonials">
              <h3 class="home-testimonials__title">"T'ensenyem el que opinen els nostres súper-usuaris!”</h3>

              <div class="home-testimonials-cards">

                <div class="home-testimonials__card">
                  <div class="home-testimonials__user">
                    <img class="home-testimonials__user--img1" src="src/assets/img/boy01.svg" alt="photo user">
                    <div class="home-testimonials__user--name-box">
                      <h2>Mikel</h2>
                      <img src="src/assets/icons/stars.svg" alt="five stars icon">
                    </div>
                  </div>                
                  <p class="home-testimonials__user--text" >"Gràcies a IT Alumni vaig aconseguir la feina dels meus somnis en el món tech amb el seu increïble programa de mentoria."</p>
                </div>

                <div class="home-testimonials__card">
                  <div class="home-testimonials__user">
                    <img class="home-testimonials__user--img2" src="src/assets/img/girl01.svg" alt="photo user">
                    <div class="home-testimonials__user--name-box">
                      <h2>Emma</h2>
                      <img src="src/assets/icons/stars.svg" alt="five stars icon">
                    </div>
                  </div>                
                  <p class="home-testimonials__user--text" >“La meva xarxa d'aquesta comunitat ha estat clau: va revolucionar la meva carrera i em va mostrar camins insospitats."</p>
                </div>

                <div class="home-testimonials__card">
                  <div class="home-testimonials__user">
                    <img class="home-testimonials__user--img3" src="src/assets/img/boy01.svg" alt="photo user">
                    <div class="home-testimonials__user--name-box">
                      <h2>Joel</h2>
                      <img src="src/assets/icons/stars.svg" alt="five stars icon">
                    </div>
                  </div>                
                  <p class="home-testimonials__user--text" >"IT Alumni em va donar les eines i l’autoestima per fer realitat el meu somni d’emprendre."</p>
                </div>

              </div>

              <div class="home-testimonials__buttons">
                <button class="home-testimonials__btn"><img src="src/assets/icons/arrow-left.svg" alt="arrow left icon"></button>
                <button class="home-testimonials__btn"><img src="src/assets/icons/arrow-right.svg" alt="arrow right icon"></button>
              </div>

            </div> 

          </section>
          

        </section>
      </main>
    `;
}