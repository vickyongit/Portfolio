const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

/* ===============================
   HEALTH CHECK
   =============================== */
app.get('/', (req, res) => {
  res.send('Backend running successfully 🚀');
});

/* ===============================
   GET ALL PROJECTS
   =============================== */
app.get('/projects', (req, res) => {
  const query = `
    SELECT 
      id,
      title,
      description,
      tech_stack,
      github_link,
      live_link,
      category,
      images
    FROM projects
    ORDER BY id DESC
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Parse images JSON safely
    const formattedProjects = rows.map(project => ({
      ...project,
      images: project.images ? JSON.parse(project.images) : []
    }));

    res.json(formattedProjects);
  });
});

/* ===============================
   ADD NEW PROJECT
   =============================== */
app.post('/projects', (req, res) => {
  const {
    title,
    description,
    tech_stack,
    github_link,
    live_link,
    category,
    images
  } = req.body;

  // Basic validation
  if (!title || !description || !tech_stack) {
    return res.status(400).json({
      error: 'Title, description, and tech_stack are required'
    });
  }

  const insertQuery = `
    INSERT INTO projects
    (title, description, tech_stack, github_link, live_link, category, images)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const params = [
    title,
    description,
    tech_stack,
    github_link || null,
    live_link || null,
    category || null,
    JSON.stringify(images || [])
  ];

  db.run(insertQuery, params, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      id: this.lastID,
      message: 'Project added successfully ✅'
    });
  });
});

/* ===============================
   SERVER START
   =============================== */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
