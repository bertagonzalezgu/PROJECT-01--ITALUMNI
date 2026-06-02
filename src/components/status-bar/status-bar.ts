
import './status-bar.css';

export function statusBar(): string {

    return /* html*/ `
    <div class="status-bar">
      <img class="status-bar__time" src="src/assets/icons/status-bar//hour.svg" alt="time icon">
      <img class="status-bar__icons" src="src/assets/icons/status-bar/battery-wifi.svg" alt="status icons">
      </div>
      </div>
    `;
}