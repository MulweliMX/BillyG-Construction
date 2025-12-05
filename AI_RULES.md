# AI Development Rules for Billy G Tradings

This document outlines the technical stack and mandatory development guidelines for maintaining and extending this application.

## Tech Stack & Guidelines

1.  **Core Technology:** This is a **Static Single-Page Application (SPA)** built using standard **HTML5, CSS3, and Vanilla JavaScript**. Do not introduce frameworks like React, Vue, or Angular.
2.  **Styling:** **Tailwind CSS** is the exclusive styling framework. All components must be styled using Tailwind utility classes, prioritizing responsive design (mobile-first).
3.  **Build Tool:** **Vite** is used for development and bundling.
4.  **Interactivity:** All client-side logic, including DOM manipulation, event handling, and dynamic features (like the modal), must be implemented using **Vanilla JavaScript** (as seen in `index.html`).
5.  **Carousels/Sliders:** The **SwiperJS** library (currently loaded via CDN) is the designated solution for all carousel or slider needs.
6.  **Form Handling:** The contact form uses **Formcarry** for submission. Do not attempt to implement custom server-side endpoints for form data.
7.  **File Structure:** Maintain the current structure where the primary content and JS logic reside within `index.html`. New CSS rules should be added to `style.css` if necessary, but utility classes are preferred.
8.  **Design Principle:** Ensure all new features and modifications adhere to the existing design language, utilizing the custom fonts (`Raleway` and `Open Sans`) and defined color palette in `tailwind.config.js`.