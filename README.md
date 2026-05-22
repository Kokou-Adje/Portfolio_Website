# Kokou Adje | AI Engineer Portfolio

A modern, interactive 3D portfolio website showcasing AI/ML expertise, built with React, Three.js, and Tailwind CSS.

🔗 **Live Site:** [kokouadje.com](https://kokouadje.com)

---

## ✨ Features

- **3D Neural Network Hero** — Procedural animated neural network visualization using Three.js
- **Interactive Specialization Cards** — 6 cards with hover descriptions (ML, DL, CV, NLP, RL, AI Ethics)
- **Timeline with Category Headers** — Education & Certifications with section dividers
- **6 Project Cards with Modals** — Click any project to view methodology, tools & results
- **3D Connection Sphere** — Animated visualization in the Contact section
- **Scroll-to-Top Button** — Smooth scroll with animated appearance
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Contact Form** — EmailJS integration for direct messages
- **Resume Download** — PDF accessible from navbar
- **Footer** — Social links (GitHub, LinkedIn, Email, Website)

---

## 🛠️ Tech Stack

| Category       | Technologies                                      |
|----------------|---------------------------------------------------|
| **Framework**  | React 18, Vite                                    |
| **3D Graphics**| Three.js, React Three Fiber, React Three Drei     |
| **Styling**    | Tailwind CSS, Framer Motion                       |
| **Components** | React Parallax Tilt, Vertical Timeline Component  |
| **Email**      | EmailJS                                           |
| **Routing**    | React Router DOM                                  |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Kokou-Adje/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://127.0.0.1:3000/`

### Build for Production

```bash
npm run build
npm run preview
```

---

## ⚙️ Configuration

### EmailJS Setup

Create a `.env` file in the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Sign up at [emailjs.com](https://www.emailjs.com/) to get your credentials.

### Resume

Place your resume PDF at `public/resume.pdf`. The navbar "Resume" link opens this file.

---

## 📝 How to Update Content

All content is centralized in **`src/constants/index.js`**. Here's what you can edit:

### Personal Info & Links

| What                  | Where                                           |
|-----------------------|-------------------------------------------------|
| Name & tagline        | `src/components/Hero.jsx`                       |
| About text            | `src/components/About.jsx`                      |
| Email recipient       | `src/components/Contact.jsx`                    |
| LinkedIn URL          | `src/components/Footer.jsx`                     |
| GitHub URL            | `src/components/Footer.jsx`                     |
| Page title            | `index.html` → `<title>`                        |
| Resume file           | `public/resume.pdf`                             |

### Specialization Cards

In `src/constants/index.js` → `services` array:

```js
{
  title: "Machine Learning",
  icon: web,                    // import from assets
  description: "Your hover description here.",
}
```

### Education & Certifications

In `src/constants/index.js` → `experiences` array:

```js
{
  title: "Degree Name",
  company_name: "University",
  icon: education,              // education or certification
  iconBg: "#383E56",
  date: "Start - End",
  category: "Education",        // "Education" or "Certifications"
  points: [
    "Relevant Coursework:",     // First item renders as italic label
    "Course 1: Description.",
    "Course 2: Description.",
  ],
}
```

### Projects

In `src/constants/index.js` → `projects` array:

```js
{
  name: "Project Name",
  description: "Short card description.",
  tags: [
    { name: "python", color: "blue-text-gradient" },
    { name: "pytorch", color: "green-text-gradient" },
    { name: "deep-learning", color: "pink-text-gradient" },
  ],
  image: project1_retinopathy,  // import from assets
  source_code_link: "https://github.com/Kokou-Adje/repo-name",
  details: {
    methodology: "Detailed methodology text...",
    tools: ["Python", "PyTorch", "NumPy"],
    results: "Results and metrics...",
  },
}
```

**Tag colors available:** `blue-text-gradient`, `green-text-gradient`, `pink-text-gradient`

### Technologies (3D Balls)

In `src/constants/index.js` → `technologies` array:

```js
{
  name: "Python",
  icon: python,                 // import SVG/PNG from assets/tech/
}
```

---

## 🖼️ Replacing Project Images

1. Add your screenshot to `src/assets/` (PNG recommended, ~720×480px)
2. Import it in `src/assets/index.js`:
   ```js
   import myProject from "./my-project-screenshot.png";
   export { ..., myProject };
   ```
3. Import and use in `src/constants/index.js`:
   ```js
   import { myProject } from "../assets";
   // Then set: image: myProject
   ```

---

## 🎨 Customization

### Colors

The primary purple theme color is `#692c94`. Key places to change:

- `src/components/Hero.jsx` — Name highlight, gradient line
- `src/components/ScrollToTop.jsx` — Button color
- `src/components/Experience.jsx` — Category header border
- `tailwind.config.cjs` — Tailwind theme colors

### 3D Visualizations

| Visual              | File                                          |
|---------------------|-----------------------------------------------|
| Hero Neural Network | `src/components/canvas/NeuralNetwork.jsx`     |
| Contact Sphere      | `src/components/canvas/ConnectionSphere.jsx`  |
| Tech Balls          | `src/components/canvas/Ball.jsx`              |
| Background Stars    | `src/components/canvas/Stars.jsx`             |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by **Kokou Adje**
