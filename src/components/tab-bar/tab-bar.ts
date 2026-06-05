import './tab-bar.css';

export function tabBar(): string {

    return /* html*/ `
    <nav class="tab-bar">
      <div class="tab-bar__item" id="tab-home">
        <img class="tab-bar__icon tab-bar__icon-default" src="src/assets/icons/tab-bar-default/Home.svg" alt="Home default icon"> <img class="tab-bar__icon tab-bar__icon-active" src="src/assets/icons/tab-bar-active/Home.svg" alt="Home active icon">
        <span class="tab-bar__text">Inici</span>
      </div>

      <div class="tab-bar__item" id="tab-networking"><img class="tab-bar__icon tab-bar__icon-default" src="src/assets/icons/tab-bar-default/Network.svg" alt="Networking default icon"> <img class="tab-bar__icon tab-bar__icon-active" src="src/assets/icons/tab-bar-active/Network.svg" alt="Networking active icon">
        <span class="tab-bar__text">Xarxa</span></div>

      <div class="tab-bar__item" id="tab-jobs"> <img class="tab-bar__icon tab-bar__icon-default" src="src/assets/icons/tab-bar-default/job.svg" alt="Job default icon"> <img class="tab-bar__icon tab-bar__icon-active" src="src/assets/icons/tab-bar-active/job.svg" alt="Job active icon">
        <span class="tab-bar__text">Feina</span></div>

      <div class="tab-bar__item" id="tab-profile"> <img class="tab-bar__icon tab-bar__icon-default" src="src/assets/icons/tab-bar-default/Profile.svg" alt="Profile default icon"> <img  class="tab-bar__icon tab-bar__icon-active" src="src/assets/icons/tab-bar-active/Profile.svg" alt="Profile active icon">
        <span class="tab-bar__text">Perfil</span></div>
    </nav>
    `;
}