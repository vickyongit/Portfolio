const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Routes 
app.get('/', (req, res) => {
    res.send('Backend running successfully 🚀')
})

app.get('/projects', (req, res) => {
    db.all(`select * from projects`, [], (err, rows) => {
        if (err) return res.status(500).json({error: err.message})
        res.json(rows)
    }) 
    
})

app.post('/projects', (req, res) => {
    const { title, description, tech_stack, github_link, live_link } = req.body;
    const postQuery = `INSERT INTO projects (title, description, tech_stack, github_link,live_link) 
                       VALUES (?,?,?,?,?)`
    const params = [title, description, tech_stack, github_link, live_link];

    db.run(postQuery, params, function(err) {
        if (err) return res.status(500).json({error: err.message})
        res.send({id: this.lastID,message: 'Project Added ✅'})
    })
})



app.listen(PORT, () => {
    console.log('Server running at localhost:', PORT)
})