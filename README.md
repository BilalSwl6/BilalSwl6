# BilalSwl6 – Personal Portfolio Website

A simple and clean personal portfolio built with **Next.js**, featuring your introduction, professional history, and contact information. It’s designed for quick customization and deployment.

---

## Features

* Fast and SEO-friendly (Next.js)
* Editable JSON data for projects and blogs
* Optional timeline component
* Easy customization for home, about, and contact pages

---

## Tech Stack

* **Framework:** Next.js
* **Language:** TypeScript
* **Deployment:** Node.js environment (Vercel, Netlify, or custom server)

---

## Setup

1. Clone the repository

   ```bash
   git clone https://github.com/BilalSwl6/BilalSwl6.git
   cd BilalSwl6
   ```

2. Install dependencies

   ```bash
   npm install
   ```

---

## Customization

To make this portfolio your own:

* Update your project and blog data:

  * `app/projects/data.json`
  * `app/blogs/data.json`

* Edit the content of these pages:

  * `app/home/page.tsx` (introduction)
  * `app/about/page.tsx` (about section)
  * `app/contact/page.tsx` (contact info)

* The **timeline** section is optional.

  * Customize it to fit your experience, or
  * Delete it entirely and remove its link from the navbar.

---

## Development

Run the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your site.

---

## Production

Build the production version:

```bash
npm run build
```

Start the server:

```bash
npm start
```

---

## Deployment

Deploy easily using any Node-compatible host. Recommended:

* **Vercel:** One-click deployment from GitHub
* **Netlify / Render:** Run `npm run build` and set `npm start` as the start command

---

## License

Open-source. Free to modify and use for personal or professional portfolios.

