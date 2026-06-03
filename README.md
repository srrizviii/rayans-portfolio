Personal portfolio website built with React and Vite, migrated from my original pure HTML/CSS implementation for future ease of updates and changes, splitting the original sections into components.

The project uses React Router to serve multiple version of the portfolio from a single deployment on Netlify. Each version is self-contained with its own components and stylesheet, organized under src/pages/.

/ — current version (v2)
/v1 — archived original portfolio

New versions can be added by creating a new folder under src/pages/, adding a route in main.jsx, and linking to it. CSS isolation between versions is handled by scoping each stylesheet to a unique wrapper class (.v1, .v2) to prevent style bleed across routes, since Vite bundles all imported CSS globally. This is probably not the most elegant solution but for me it works for the time being. 