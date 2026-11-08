# Background Color Picker

A small React Router learning project: use the navigation links to move between three pages, each with a different background color. The Home page blends red and blue; the other pages show blue and red.

![Screenshot of the Background Color Picker](https://github.com/matwal42083/react_router/assets/115494989/353910b3-8bec-4e81-b0c8-3ec2e10e23b6)

## Features

- Client-side navigation between Home, Blue, and Red using React Router.
- A distinct background style for each route.
- A minimal example of defining routes and rendering page components.

## Run locally

You’ll need [Node.js](https://nodejs.org/) and npm.

```bash
git clone https://github.com/matwal42083/react_router.git
cd react_router
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |

## Tech stack

- React
- React Router
- Vite
- JavaScript (JSX) and CSS

## Project structure

```text
src/
├── Components/
│   ├── Blue.jsx   # Blue route
│   ├── Home.jsx   # Home route
│   └── Red.jsx    # Red route
├── App.jsx        # Navigation and route definitions
├── App.css
├── index.css
└── main.jsx       # React entry point and BrowserRouter
```

This is a small educational example for practicing React Router and page navigation.
