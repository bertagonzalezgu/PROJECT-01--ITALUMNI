# PROJECT-01--ITALUMNI

Plataforma per a la comunitat d'exalumnes de l'IT Academy. Permet visualitzar perfils d'alumni, cercar ofertes de feina i connectar amb professionals del sector.

🔗 **Demo en viu:** [https://project-01-italumni-6xewdxb9v-berta-projects.vercel.app](https://project-01-italumni-6xewdxb9v-berta-projects.vercel.app)

---

## Vista prèvia

| Mobile | Desktop |
|--------|---------|
| Splash → Registre → Home → Xarxa → Feina | Home → Xarxa → Oportunitats de feina |

---

## Funcionalitats

- **Cerca d'alumni** per nom i rol
- **Borsa de treball** amb filtres per títol i tipus
- **Xarxa professional** amb filtres per activitat, popularitat i connexions
- **Disseny responsive** — mobile first amb breakpoint a 768px
- **Flux de registre** amb control d'accés per pàgines

---

## Tecnologies

- **TypeScript** + **Vite**
- **HTML / CSS** amb metodologia BEM
- CSS Custom Properties (design system)

---

## Instal·lació i ús

```bash
# Clona el repositori
git clone https://github.com/bertagonzalezgu/PROJECT-01--ITALUMNI.git
cd PROJECT-01--ITALUMNI

# Instal·la les dependències
npm install

# Arrenca el servidor de desenvolupament
npm run dev

# Build de producció
npm run build
```

---

## Estructura del projecte

```
src/
├── components/
│   ├── nav-bar/
│   ├── tab-bar/
│   ├── top-bar/
│   ├── status-bar/
│   ├── footer/
│   ├── splash/
│   └── sign-up/
├── pages/
│   ├── home/
│   ├── networking/
│   └── job-portal/
├── data/
│   ├── alumni.ts
│   └── jobs.ts
├── main.ts
└── style.css
```

---

## Arquitectura de navegació

El projecte usa una **SPA sense framework** amb navegació manual basada en `show/hide` de seccions. La funció `navTo(section)` centralitza tota la lògica de navegació i gestiona:

- Detecció de viewport (mobile < 768px / desktop)
- Control d'accés per registre
- Renderització condicional de components (top-bar, tab-bar, nav-bar, footer)

---

## Desplegament

El projecte està desplegat a **Vercel** amb integració contínua des de la branca `main`.

Cada `push` a `main` actualitza automàticament la demo en viu.
