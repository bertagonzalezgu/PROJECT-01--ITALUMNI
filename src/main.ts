import './style.css'
import { statusBar } from './components/status-bar/status-bar'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

${statusBar()}

 <main id="main-content">
    </main>

`
