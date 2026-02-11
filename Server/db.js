const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(
  path.resolve(__dirname, 'portfolio.db'),
  err => {
    if (err) {
      console.error('Failed to connect database:', err);
    } else {
      console.log('Connected to database successfully 🚀');
    }
  }
);

db.serialize(() => {
  /* ===============================
     CREATE TABLE
     =============================== */
  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      tech_stack TEXT NOT NULL,
      github_link TEXT,
      live_link TEXT,
      category TEXT,
      images TEXT
    )
  `);

  /* ===============================
     CHECK EXISTING DATA
     =============================== */
  db.get(`SELECT COUNT(*) AS count FROM projects`, (err, row) => {
    if (err) {
      console.error('Error checking existing data:', err.message);
      return;
    }

    if (row.count > 0) {
      console.log('Projects already exist, skipping insertion.');
      return;
    }

    /* ===============================
       INSERT DATA
       =============================== */
    const insert = db.prepare(`
      INSERT INTO projects
      (title, description, tech_stack, github_link, live_link, category, images)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    const projects = [
      {
        project_name: 'Nutlio',
        description:
          'NutliO is a modern full-stack e-commerce platform designed to make purchasing premium dry fruits simple, secure, and seamless. Users can explore high-quality products, add items to their cart, and complete orders through a smooth and intuitive checkout experience. The platform integrates the Razorpay payment gateway to ensure fast, secure, and reliable online transactions. With role-based access for customers and administrators, NutliO enables efficient order management, inventory tracking, and secure authentication. Built with a scalable MERN architecture, the application delivers a responsive, mobile-friendly shopping experience tailored for today’s digital customers.',
        tech_stack: 'React.js, Node.js, Express.js, SQLite, JavaScript',
        github_url: 'https://github.com/yourusername/nutlio',
        live_url: 'https://nutlio.live',
        category: 'Full Stack / E-commerce',
        image_urls: ['1', '2', '3']
      },
      {
        project_name: 'NxtWatch',
        description:
          'An immersive video streaming platform modeled after YouTube. Offers dark/light theme switching, secure JWT-based authentication, protected routes, and smooth navigation using React Router.',
        tech_stack: 'React.js, Node.js, Express.js, SQLite, JavaScript',
        github_url: 'git_hub_link',
        live_url: 'https://nxtwatchbyvicky.ccbp.tech',
        category: 'Full Stack / Media',
        image_urls: ['logo']
      },
      {
        project_name: 'Chase Your Dream',
        description:
          'An intuitive job discovery platform empowering users to explore, filter, and apply for roles across industries with real-time listings and secure authentication.',
        tech_stack: 'React.js, Node.js, Express.js, SQLite, JavaScript',
        github_url: 'git_hub_link',
        live_url: 'https://chaseyourdream.ccbp.tech/login',
        category: 'Full Stack / Job Portal',
        image_urls: ['logo']
      },
      {
        project_name: 'Trend Setter',
        description:
          'A modern shopping application with real-time product listings, smooth cart interactions, and secure authentication across devices.',
        tech_stack: 'React.js, Node.js, Express.js, SQLite, JavaScript',
        github_url: 'git_hub_link',
        live_url: 'https://trendsetterviki.ccbp.tech',
        category: 'Full Stack / E-commerce',
        image_urls: ['logo']
      },
      {
        project_name: 'Portfolio Website',
        description:
          'An interactive, animated single-page portfolio showcasing projects, skills, and services with smooth scroll effects and responsive design.',
        tech_stack: 'React.js, JavaScript, CSS Animations',
        github_url: 'git_hub_link',
        live_url: 'https://vigneshbk-portfolio.vercel.app',
        category: 'Personal Branding',
        image_urls: ['logos']
      }
    ];

    for (const project of projects) {
      insert.run(
        project.project_name,
        project.description,
        project.tech_stack,
        project.github_url,
        project.live_url,
        project.category,
        JSON.stringify(project.image_urls) // store array safely
      );
    }

    insert.finalize();
    console.log('Projects data inserted successfully ✅');
  });
});

module.exports = db;
