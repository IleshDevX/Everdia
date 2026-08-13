# 🏆 Everdia Luxury Eco-Resort Website

A modern React.js web application for **Everdia** luxury eco-resorts. Built with advanced frontend techniques including scroll-triggered GSAP animations, Lenis smooth scrolling, dynamic UI components, and a responsive Tailwind CSS layout.

---

## ✨ Features

- 🌿 **Luxury Eco-Resort Showcase:** Immersive UI design tailored for premium hospitality and nature retreats.
- ⚡ **Smooth Animations & Scroll Dynamics:** Powered by GSAP (GreenSock Animation Platform) and Lenis smooth scrolling.
- 🎨 **Modern Styling:** Designed using Tailwind CSS v4 with curated components and responsive layouts.
- 📱 **Fully Responsive:** Seamlessly optimized for mobile, tablet, and desktop screens.
- 🚀 **Fast Performance:** Powered by Vite 6 for instant HMR and optimized production builds.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/) with [Vite 6](https://vite.dev/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Animations:** [GSAP 3](https://gsap.com/) & [@gsap/react](https://gsap.com/resources/React/)
- **Smooth Scrolling:** [Lenis](https://lenis.darkroom.engineering/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** [Vercel](https://vercel.com/) / GitHub Pages

---

## 📦 Project Structure

```
05 Everdia/
├── client/                 # Frontend React Vite application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # UI components (Hero, Navbar, Gallery, Showcase, etc.)
│   │   ├── layouts/        # Layout wrappers
│   │   ├── pages/          # App views & routes
│   │   └── index.css       # Tailwind & global styles
│   ├── package.json
│   └── vercel.json         # Vercel deployment config
├── package.json            # Root workspace package file
└── README.md
```

---

## 🚀 Installation & Setup

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/everdia.git
   cd "05 Everdia"
   ```

2. **Navigate to the client directory & install dependencies:**
   ```bash
   cd client
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the URL shown in your terminal) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📜 Available Scripts

Inside the `client` directory:

- `npm run dev` — Starts the Vite development server with HMR.
- `npm run build` — Builds the application for production to `dist/`.
- `npm run preview` — Previews the production build locally.
- `npm run lint` — Runs ESLint for syntax and quality checks.

From the repository root:
- `npm run build` — Triggers the client production build (`npm --prefix client run build`).

---

## 🌐 Deployment

The project is configured for easy deployment on **Vercel** via `client/vercel.json`:
- Set the root directory to `client` on Vercel.
- Build Command: `npm run build`
- Output Directory: `dist`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
