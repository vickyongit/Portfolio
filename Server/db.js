const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, 'portfolio.db'), (err) => {
  if (err) {
    console.error('Failed to connect database:', err);
  } else {
    console.log('Connected to database Successfully 🚀');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      tech_stack TEXT NOT NULL,
      github_link TEXT,
      live_link TEXT,
      logo TEXT NOT NULL
    )
  `);

  db.get('SELECT COUNT(*) AS count FROM projects', (err, row) => {
    if (err) {
      console.error('Error checking existing data:', err.message);
      return;
    }

    if (row.count === 0) {
      const insert = db.prepare(`
        INSERT INTO projects (title, description, tech_stack, github_link, live_link, logo)
        VALUES (?, ?, ?, ?, ?, ?)
      `);

      const projects = [
        [
          'Nxtwatch',
          'An immersive video streaming platform modeled after YouTube. Offers dark/light theme switching, secured user authentication with JWT, protected routes, and smooth navigation using React Router. Built for speed, simplicity, and an engaging viewing experience.',
          'React.js, Node.js, Express.js, SQLite, JavaScript',
          'git_hub_link',
          'https://nxtwatchbyvicky.ccbp.tech',
          'logo'
        ],
        [
          'Chase Your Dream',
          'An intuitive job discovery platform empowering users to explore, filter, and apply to roles across industries. Features real-time listings, role-based filters, secure login, and a sleek layout that simplifies your path to success.',
          'React.js, Node.js, Express.js, SQLite, JavaScript',
          'git_hub_link',
          'https://chaseyourdream.ccbp.tech/login',
          'logo'
        ],
        [
          'Trend Setter',
          'A modern shopping experience with real-time product listings, smooth cart interactions. Built with precision for reliability, authentication, and responsiveness across devices to deliver a retail-like feel.',
          'React.js, Node.js, Express.js, SQLite, JavaScript',
          'git_hub_link',
          'https://trendsetterviki.ccbp.tech',
          'logo'
        ],
        [
        'My Portfolio Website',
        'An interactive, animated single-page application showcasing my web development projects, skills, and services. Built with the MERN stack and designed with engaging scroll effects, smooth transitions, and responsive layout for a dynamic user experience.',
        'React.js, Node.js, Express.js, SQLite, JavaScript, CSS Animations',
        'git_hub_link',
        'https://vigneshbk-portfolio.vercel.app',
        'logos'
        ]
      ]
      

      for (const [title, description, tech_stack, github_link, live_link, logo] of projects) {
        insert.run(title, description, tech_stack, github_link, live_link, logo);
      }

      insert.finalize();
      console.log('Projects Data Inserted!');
    } else {
      console.log('Projects Already Exist, Skipping Insertion.');
    }
  });
});


module.exports = db