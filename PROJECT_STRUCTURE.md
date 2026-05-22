# Project Structure

Detailed breakdown of every file and folder in the portfolio project.

---

## Root Files

```
├── index.html                  # Entry HTML file — contains page title and root div
├── package.json                # Dependencies and npm scripts (dev, build, preview)
├── vite.config.js              # Vite config — dev server set to 127.0.0.1:3000
├── tailwind.config.cjs         # Tailwind CSS theme config (colors, fonts, screens)
├── postcss.config.cjs          # PostCSS plugins (Tailwind, Autoprefixer)
└── README.md                   # Project documentation
```

---

## Public Directory

Static files served as-is. Not processed by Vite.

```
public/
├── logo.svg                    # Site favicon (SVG)
├── resume.pdf                  # Resume PDF — linked from navbar "Resume" button
├── desktop_pc/                 # 3D PC model (legacy, no longer used in hero)
│   ├── scene.gltf
│   ├── scene.bin
│   └── textures/               # Model textures
└── planet/                     # 3D Earth model (legacy, replaced by ConnectionSphere)
    ├── scene.gltf
    ├── scene.bin
    └── textures/
```

---

## Source Directory

```
src/
├── main.jsx                    # App entry point — renders <App /> into #root
├── App.jsx                     # Main layout — assembles all sections in order
├── styles.js                   # Shared Tailwind class strings (heading sizes, padding)
└── index.css                   # Global CSS (Tailwind directives, gradients, custom classes)
```

### App.jsx Section Order

```
Navbar          — Fixed top navigation
Hero            — 3D Neural Network + intro text
About           — Overview + 6 specialization cards
Experience      — Education & Certifications timeline
Tech            — 3D technology balls
Works           — 6 project cards + modal system
Contact         — Contact form + 3D Connection Sphere
Footer          — Social links + copyright
ScrollToTop     — Floating scroll button
```

---

## Components

### Page Sections

```
src/components/
├── Navbar.jsx                  # Fixed navigation bar
│                                 - Nav links: About, Experience, Contact, Resume
│                                 - Mobile hamburger menu
│                                 - Background changes on scroll
│
├── Hero.jsx                    # Hero section (65vh height)
│                                 - "Hi, I'm Kokou" heading
│                                 - Subtitle + description paragraph
│                                 - 3D NeuralNetworkCanvas background
│                                 - Scroll-down indicator animation
│
├── About.jsx                   # Introduction section
│                                 - Overview text paragraph
│                                 - 6 ServiceCards with hover descriptions
│                                 - Cards use Tilt effect + fade-in animation
│
├── Experience.jsx              # Education & Certifications timeline
│                                 - Category headers ("Education", "Certifications")
│                                 - VerticalTimeline with ExperienceCards
│                                 - "Relevant Coursework:" italic label support
│                                 - Icons: graduation cap (education), badge (certification)
│
├── Tech.jsx                    # Technology skills display
│                                 - 3D floating balls for each technology
│                                 - Uses BallCanvas for each tech icon
│
├── Works.jsx                   # Projects section
│                                 - 6 ProjectCards with Tilt effect
│                                 - GitHub icon overlay on project image
│                                 - "Click to view details →" hint
│                                 - ProjectModal with AnimatePresence
│                                 - Modal shows: methodology, tools, results, GitHub link
│
├── Contact.jsx                 # Contact form section
│                                 - EmailJS-powered form (name, email, message)
│                                 - 3D ConnectionSphereCanvas visual
│                                 - Sends to kokou.maw.adje@gmail.com
│
├── Footer.jsx                  # Site footer
│                                 - Social icons: GitHub, LinkedIn, Email, Website
│                                 - Copyright with auto-updating year
│
├── ScrollToTop.jsx             # Floating scroll-to-top button
│                                 - Appears after scrolling 400px
│                                 - Smooth scroll animation
│                                 - Purple themed with fade-in/out
│
├── Loader.jsx                  # Loading spinner for 3D canvas elements
├── Feedbacks.jsx               # UNUSED — legacy testimonials component
└── index.js                    # Barrel exports for all components
```

### 3D Canvas Components

```
src/components/canvas/
├── NeuralNetwork.jsx           # Hero 3D visualization
│                                 - 55 procedural neuron nodes in 6 layers
│                                 - Connection lines between layers
│                                 - Traveling pulse animations
│                                 - Slow rotation + floating motion
│                                 - Purple color scheme (#692c94)
│
├── ConnectionSphere.jsx        # Contact section 3D visualization
│                                 - Globe-shaped node network
│                                 - Represents "connecting" with the user
│
├── Ball.jsx                    # Individual tech skill ball
│                                 - Displays technology icon on 3D sphere
│                                 - Used by Tech.jsx for each skill
│
├── Stars.jsx                   # Background star field
│                                 - Random star particles
│                                 - Slow rotation animation
│                                 - Used behind Contact section
│
├── Computers.jsx               # UNUSED — legacy 3D PC model (replaced by NeuralNetwork)
├── Earth.jsx                   # UNUSED — legacy Earth globe (replaced by ConnectionSphere)
└── index.js                    # Barrel exports for canvas components
```

---

## Data & Configuration

### Constants (All Editable Content)

```
src/constants/
└── index.js                    # ⭐ MAIN CONTENT FILE — edit this to update the site
                                  Exports:
                                  - navLinks[]        → Navigation menu items
                                  - services[]        → 6 specialization cards + descriptions
                                  - technologies[]    → Tech skill balls (icon + name)
                                  - experiences[]     → Education & Certifications timeline
                                  - projects[]        → 6 project cards + modal details
```

### Assets

```
src/assets/
├── index.js                    # Barrel exports for all assets
│
├── herobg.png                  # Hero section background pattern
├── logo.svg                    # Site logo (used in navbar)
├── github.png                  # GitHub icon (used on project cards)
├── menu.svg                    # Mobile menu hamburger icon
├── close.svg                   # Mobile menu close icon
│
├── web.png                     # Specialization card icon 1
├── mobile.png                  # Specialization card icon 2
├── backend.png                 # Specialization card icon 3
├── creator.png                 # Specialization card icon 4
│
├── project1_retinopathy.png    # Project image: Diabetic Retinopathy
├── project2_knn.png            # Project image: Breast Cancer kNN
├── project3_naive_bayes.png    # Project image: Naive Bayes
├── project4_sentiment.png      # Project image: Sentiment Analysis
├── project5_cartpole.png       # Project image: CartPole DQN
├── project6_bias.png           # Project image: AI Bias Detection
│
├── company/                    # Timeline icons
│   ├── education.svg           # Graduation cap icon
│   ├── certification.svg       # Badge icon
│   └── project.svg             # Code brackets icon (unused after removing projects from timeline)
│
└── tech/                       # Technology skill icons (used by 3D balls)
    ├── python.svg
    ├── tensorflow.svg
    ├── pytorch.svg
    ├── scikit-learn.svg
    ├── pandas.svg
    ├── numpy.svg
    ├── matplotlib.svg
    ├── java.svg
    ├── csharp.svg
    └── git.png
```

---

## Utilities

```
src/utils/
└── motion.js                   # Framer Motion animation variants
                                  - textVariant()     → Text fade-in
                                  - fadeIn()           → Directional fade
                                  - zoomIn()           → Scale animation
                                  - slideIn()          → Slide from direction
                                  - staggerContainer() → Staggered children
```

### Higher-Order Components

```
src/hoc/
├── SectionWrapper.jsx          # Wraps sections with:
│                                 - Consistent padding
│                                 - Scroll anchor (id for navigation)
│                                 - Stagger animation container
│                                 - Max-width constraint
└── index.js                    # Barrel export
```

---

## Styling

### Tailwind Theme (`tailwind.config.cjs`)

Key custom values:
- **Colors:** `primary` (dark navy), `secondary` (muted gray), `tertiary` (dark purple), `black-100/200`
- **Screens:** `xs: 450px` (extra small breakpoint)
- **Background:** `hero-pattern` uses `herobg.png`

### Global CSS (`src/index.css`)

Custom classes:
- `.hash-span` — Offset scroll anchors for fixed navbar
- `.black-gradient` — Dark gradient backgrounds
- `.violet-gradient` — Purple gradient (hero line)
- `.green-pink-gradient` — Card border gradient
- `.blue-text-gradient`, `.green-text-gradient`, `.pink-text-gradient` — Tag colors

---

## Quick Reference: Common Updates

| Task                        | File to Edit                          |
|-----------------------------|---------------------------------------|
| Change project descriptions | `src/constants/index.js` → projects[] |
| Add new project             | `src/constants/index.js` → projects[] |
| Update education            | `src/constants/index.js` → experiences[] |
| Add certification           | `src/constants/index.js` → experiences[] |
| Change about text           | `src/components/About.jsx`            |
| Change hero text            | `src/components/Hero.jsx`             |
| Update social links         | `src/components/Footer.jsx`           |
| Change email recipient      | `src/components/Contact.jsx`          |
| Replace project image       | `src/assets/` + `src/assets/index.js` |
| Add tech skill ball         | `src/constants/index.js` → technologies[] |
| Adjust 3D neural network    | `src/components/canvas/NeuralNetwork.jsx` |
| Change theme color          | Search for `#692c94` across project   |
| Update page title           | `index.html`                          |
| Replace resume              | `public/resume.pdf`                   |
