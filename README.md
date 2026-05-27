# Chanuka Keerthisingha Portfolio

Personal developer portfolio for showcasing my software engineering work, technical skills, experience, and contact details.

[![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=111)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?logo=tailwindcss&logoColor=fff)](https://tailwindcss.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Contact_Form-FF8434)](https://www.emailjs.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel)](https://vercel.com/)

## Live Site

Visit the portfolio: [https://itschanuka.vercel.app](https://itschanuka.vercel.app)

## Overview

This portfolio is a modern single-page React application designed around a dark, glass-style interface with purple and pink accents. It highlights full-stack, AI-assisted, web, mobile, and IoT projects, while also providing a simple way for visitors and clients to get in touch.

## Features

- Responsive single-page portfolio layout
- Animated hero section with typed role text
- Project gallery with category filtering
- Skills, education, and experience sections
- Tools and technologies showcase
- Downloadable CV from the public assets folder
- EmailJS-powered contact form with toast feedback
- Social links for GitHub, LinkedIn, Instagram, and other platforms

## Tech Stack

- **Frontend:** React 19, Create React App
- **Styling:** Tailwind CSS, custom gradients, responsive utility classes
- **Icons:** Lucide React
- **Contact Form:** EmailJS
- **Notifications:** React Hot Toast
- **Deployment:** Vercel

## Project Structure

```text
portfolio/
|-- public/
|   |-- ChanukaCV.pdf
|   |-- image.png
|   `-- index.html
|-- src/
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- Footer.jsx
|   |   |-- Hero.jsx
|   |   |-- Navbar.jsx
|   |   |-- Projects.jsx
|   |   `-- Tools.jsx
|   |-- data/
|   |   |-- education.js
|   |   |-- projects.js
|   |   |-- skills.js
|   |   `-- tools.js
|   |-- hooks/
|   |   `-- useTypedText.js
|   |-- portfolio.jsx
|   |-- index.js
|   `-- index.css
|-- tailwind.config.js
|-- postcss.config.js
`-- package.json
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your EmailJS credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

These variables are used by the contact form in `src/portfolio.jsx`.

### Run Locally

```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

### Run Tests

```bash
npm test
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm test` | Runs the test watcher |
| `npm run eject` | Ejects Create React App configuration |

## Featured Sections

- **Hero:** Name, role animation, social links, and CV download
- **About:** Introduction, technical skills, soft skills, education, and experience
- **Projects:** Filterable project cards covering full-stack, AI, mobile, web, and IoT work
- **Tools:** Languages, frameworks, development tools, and design tools
- **Contact:** Email, phone, location, social links, and message form

## Deployment

The project is ready to deploy on Vercel, Netlify, or any static hosting provider that supports React builds.

For Vercel:

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Add the EmailJS environment variables.
4. Deploy using the default Create React App build settings.

## Contact

**Chanuka Keerthisingha**

- GitHub: [github.com/itschanuka](https://github.com/itschanuka)
- LinkedIn: [linkedin.com/in/chanuka-keerthisingha](https://www.linkedin.com/in/chanuka-keerthisingha/)
- Portfolio: [itschanuka.vercel.app](https://itschanuka.vercel.app)
- Email: [itschanuka@gmail.com](mailto:itschanuka@gmail.com)
