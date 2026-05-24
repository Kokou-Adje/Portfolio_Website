# Kokou Adje — AI Engineer Portfolio

Personal portfolio site showcasing my AI/ML work. Built with React, Three.js, and Tailwind CSS.

**Live site:** [www.kokouadje.com](https://www.kokouadje.com)

---

## Tech stack

- **Framework:** React 18, Vite
- **3D graphics:** Three.js, React Three Fiber, React Three Drei
- **Styling:** Tailwind CSS, Framer Motion
- **Email:** EmailJS
- **Deployment:** Vercel

## Run locally

Requires Node.js 16+.

```bash
git clone https://github.com/Kokou-Adje/Portfolio_Website.git
cd Portfolio_Website
npm install
npm run dev
```

Site runs at `http://127.0.0.1:3000/`.

## Configuration

Contact form uses EmailJS. Create a `.env` file in the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Resume PDF goes at `public/resume.pdf`. The navbar Resume link opens it.

## Project structure

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for a full breakdown of every file and folder, plus a guide to updating content.

Most content lives in `src/constants/index.js`: projects, education, certifications, specialization cards, and tech stack.

## Credits

The initial scaffolding was adapted from the open-source [3D Portfolio template by Adrian Hajdin](https://github.com/adrianhajdin/3D_portfolio). The 3D visualizations (Neural Network, Connection Sphere), project structure, content, and design have been substantially rebuilt.
