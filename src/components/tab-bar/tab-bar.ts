import './tab-bar.css';

export function tabBar(): string {

    return /* html*/ `
    <nav class="tab-bar">
      <div class="tab-bar__item">
        <img class="tab-bar__icon tab-bar__icon-default" src="src/assets/icons/tab-bar-default/Home.svg" alt="Home default icon"> <img class="tab-bar__icon tab-bar__icon-active" src="src/assets/icons/tab-bar-active/Home.svg" alt="Home active icon">
        <span class="tab-bar__text">Home</span>
      </div>

      <div class="tab-bar__item"><img class="tab-bar__icon tab-bar__icon-default" src="src/assets/icons/tab-bar-default/Network.svg" alt="Networking default icon"> <img class="tab-bar__icon tab-bar__icon-active" src="src/assets/icons/tab-bar-active/Network.svg" alt="Networking active icon">
        <span class="tab-bar__text">Networking</span></div>

      <div class="tab-bar__item"> <img class="tab-bar__icon tab-bar__icon-default" src="src/assets/icons/tab-bar-default/job.svg" alt="Job default icon"> <img class="tab-bar__icon tab-bar__icon-active" src="src/assets/icons/tab-bar-active/job.svg" alt="Job active icon">
        <span class="tab-bar__text">Job Portal</span></div>

      <div class="tab-bar__item"> <img class="tab-bar__icon tab-bar__icon-default" src="src/assets/icons/tab-bar-default/Profile.svg" alt="Profile default icon"> <img  class="tab-bar__icon tab-bar__icon-active" src="src/assets/icons/tab-bar-active/Profile.svg" alt="Profile active icon">
        <span class="tab-bar__text">Profile</span></div>
    </nav>
    `;
}