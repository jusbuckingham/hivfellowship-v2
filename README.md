# HIV Fellowship Website (v2)

A Next.js 13 App-Router project for an HIV Fellowship program website.  
Built with React, TypeScript, Tailwind CSS, and JSON-based content files. Deployed on Vercel.

---

## 🚀 Features

- **Image Carousel**: Full-width, auto-cycling banner at the top of the homepage.  
- **Accordion Sections**: Collapsible/expandable content blocks for each major section.  
- **JSON-Driven Content**: All text and data (overview, curriculum, faculty, fellows, alumni, partners, how-to-apply) live in `/data/*.json`.  
- **Tailwind CSS**: Rapid UI styling with a customized theme (colors, typography).  
- **Responsive**: Mobile-first design with breakpoints for larger screens.  
- **App Router**: File-based routing and React server components in Next.js 13+.

---

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) ≥ 16  
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)  
- (Optional) [Vercel CLI](https://vercel.com/cli) for local prod testing

---

## 🔧 Installation

```bash
# Clone the repo
git clone https://github.com/your-org/hivfellowship-v2.git
cd hivfellowship-v2

# Install dependencies
npm install
# or
yarn install
```

---

## 🛠️ Development

```bash
# Start the dev server (Next.js)
npm run dev
# or
yarn dev
```

- Open your browser at [http://localhost:3000](http://localhost:3000).  
- Edit React components in `app/components/` or JSON in `data/`; changes hot-reload automatically.

---

## 📁 Project Structure

```
hivfellowship-v2/
├─ app/
│  ├─ components/
│  │  ├─ Accordion.tsx         # Collapsible wrapper
│  │  ├─ Carousel.tsx          # Image slider
│  │  ├─ Navbar.tsx            # Logo + menu
│  │  ├─ Footer.tsx            # Footer with JSON data
│  │  ├─ Overview.tsx          # “About the Program”
│  │  ├─ ClinicalCenters.tsx   # “Our Clinical Centers”
│  │  ├─ Curriculum.tsx        # “The Curriculum”
│  │  ├─ Unique.tsx            # “What Is Unique…”
│  │  ├─ CoreFaculty.tsx       # Faculty list
│  │  ├─ Fellows.tsx           # Current fellows
│  │  ├─ Alumni.tsx            # Alumni list
│  │  ├─ Partners.tsx          # Partner organizations
│  │  └─ HowToApply.tsx        # Application instructions
│  ├─ layout.tsx               # Root layout with Navbar & Footer
│  └─ page.tsx                 # Renders Carousel + all sections
├─ data/
│  ├─ carousel.json            # Carousel image paths
│  ├─ overview.json
│  ├─ clinicalCenters.json
│  ├─ curriculum.json
│  ├─ unique.json
│  ├─ coreFaculty.json
│  ├─ fellows.json
│  ├─ alumni.json
│  ├─ partners.json
│  └─ howToApply.json
├─ public/
│  └─ images/
│     ├─ home/                 # carousel & logo images
│     └─ …other assets…
├─ styles/
│  └─ globals.css              # Tailwind imports & custom resets
├─ tailwind.config.js
├─ tsconfig.json
├─ package.json
└─ README.md
```

---

## 🔍 JSON Data

Each **section** component reads its content from a corresponding JSON file in `/data`. This decouples data from presentation and makes updates easy:

- **Overview**: `overview.json`  
- **Clinical Centers**: `clinicalCenters.json`  
- **Curriculum**: `curriculum.json`  
- **Unique**: `unique.json`  
- **Faculty**: `coreFaculty.json`  
- **Fellows**: `fellows.json`  
- **Alumni**: `alumni.json`  
- **Partners**: `partners.json`  
- **How to Apply**: `howToApply.json`  
- **Carousel**: `carousel.json`

To update text or add entries, just modify the JSON and save — no need to touch the React code.

---

## ⚛️ Styling & Theme

- **Tailwind CSS**: Configured in `tailwind.config.js`, with a custom color palette and typography.  
- **Global Styles**: `styles/globals.css` imports Tailwind’s base/components/utilities and sets up fonts, variables, and body background.  
- Components use utility classes (e.g. `bg-primary-dark`, `text-neutral-grayDark`, `h-64`, `md:h-96`, etc.) for consistent design.

---

## 🚀 Deployment

This project is optimized for Vercel:

1. Push your branch to GitHub.  
2. On [vercel.com](https://vercel.com), import the repo and select the `app/` directory if prompted.  
3. Vercel will auto-detect the Next.js framework.  
4. Every Git push triggers a new preview & production deployment.

---

## 🤝 Contributing

1. Fork the repo & create a feature branch:  
   ```bash
   git checkout -b feat/my-update
   ```
2. Make your changes (update JSON or components).  
3. Commit with a clear message:  
   ```
   feat: add new alumni entry to alumni.json
   ```
4. Push to your fork & open a PR against `main`.  

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

> Built with 💙 by the HIV Fellowship dev team.  
> Questions? Open an issue or reach out at `hivfellowship@yourorg.org`.
