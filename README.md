# HIV Fellowship Website (v2)

A modern, accessible, and fully responsive website for the HIV Clinical Leadership Fellowship, built using **Next.js 13 App Router**, **React**, **TypeScript**, and **Tailwind CSS**. All content is dynamically sourced from JSON files, making it easy to maintain and update. The site is deployed via Vercel.

---

## 🚀 Key Features

- **Image Carousel**: Auto-rotating image slider with smooth transitions.
- **Collapsible Sections**: Clean accordion UI for each major section.
- **Card-Based Profiles**: Faculty, Fellows, Alumni, and Partners use responsive card layouts with circular images.
- **JSON-Driven Content**: All site content lives in `/data/*.json`, decoupled from React components.
- **Tailwind CSS Styling**: Customized theme with consistent spacing, colors, and typography.
- **Responsive Design**: Fully mobile-friendly, with intuitive layout scaling.
- **Vercel-Optimized**: Built for performance and ease of deployment on [Vercel](https://vercel.com).

---

## 🧱 Project Structure

```
hivfellowship-v2/
├── app/
│   ├── components/           # Reusable UI components
│   ├── layout.tsx            # Global layout with Navbar & Footer
│   └── page.tsx              # Home page with all sections
├── data/                     # JSON content for each section
├── public/                   # Static assets (images, logos)
├── styles/
│   └── globals.css           # Tailwind imports + base styles
├── tailwind.config.js        # Theme configuration
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🗂️ Components Overview

| Component         | JSON Source             | Description                                  |
|------------------|-------------------------|----------------------------------------------|
| `Overview.tsx`   | `overview.json`         | About the program                            |
| `ClinicalCenters.tsx` | `clinicalCenters.json` | Details of affiliated sites              |
| `Curriculum.tsx` | `curriculum.json`       | Curriculum outline                           |
| `Unique.tsx`     | `unique.json`           | What sets the program apart                  |
| `Faculty.tsx`    | `faculty.json`          | Leadership and clinical teams                |
| `Fellows.tsx`    | `fellows.json`          | Current fellows with bios & photos           |
| `Alumni.tsx`     | `alumni.json`           | Alumni grouped by year                       |
| `Partners.tsx`   | `partners.json`         | Partner orgs with logos                      |
| `HowToApply.tsx` | `howToApply.json`       | Application instructions                     |
| `Program.tsx`    | `program.json`          | Timeline, mentorship, and structure          |
| `Carousel.tsx`   | `carousel.json`         | Image slider at top of home page             |

---

## 📦 Getting Started

### Prerequisites

- Node.js ≥ 16
- npm or yarn
- Vercel CLI (optional)

### Installation

```bash
git clone https://github.com/your-org/hivfellowship-v2.git
cd hivfellowship-v2
npm install   # or yarn install
npm run dev   # or yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the site locally.

---

## ✏️ Content Editing

All content is stored in `/data/*.json`.  
To update the site:

1. Open the relevant `.json` file in `/data/`.
2. Edit the text, add entries, or update image paths.
3. Save the file — changes will hot-reload locally.

No need to modify the React components unless layout changes are required.

---

## 🚀 Deployment on Vercel

1. Push the repository to GitHub.
2. Log in to [vercel.com](https://vercel.com) and import the repo.
3. Use default settings — Vercel auto-detects Next.js App Router.
4. Every commit triggers a new deployment.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: your message"`
4. Push and open a pull request

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

---

> Designed and developed with ❤️ by Jus Buckingham 
