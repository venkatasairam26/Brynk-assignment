const express = require('express');
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require('path')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3001

const dbPath = path.join(__dirname, 'database.db')
let db = null;

const initializeDatabase = async () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS data (
        heading TEXT NOT NULL
    )`
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        })
        await db.run(createTableQuery)
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } catch (error) {
        console.error('Error connecting to database:', error)
        process.exit(1)
    }
}

initializeDatabase()

//  This is for inserting data or we can add data directly in the database
// app.post('/data', async (req, res) => {
//     const { heading } = req.body;
//     const insertQuery = `
//     INSERT INTO data (heading)
//     VALUES ($heading)
//     `
//     try {
//         await db.run(insertQuery, { $heading: heading })
//         res.status(201).json({ message: 'Data added successfully' })
//     } catch (error) {
//         console.error('Error adding data:', error)
//         res.status(500).json({ error: 'Failed to add data' })
//     }
// })

// This is for updating data
app.put('/data', async (req, res) => {
    const { heading } = req.body;
    const updateQuery = `
    UPDATE data 
    SET heading = $heading 
    `;
    try {
        const result = await db.run(updateQuery, { 
            $heading: heading,
        });
        
        if (result.changes === 0) {
            return res.status(404).json({ error: 'No record found with the specified ID' });
        }
        
        res.status(200).json({ message: 'Heading updated successfully' });
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'Failed to update data' });
    }
})

app.get('/data', async (req, res) => {
    const selectQuery = 'SELECT * FROM data'
    try {
        const rows = await db.all(selectQuery)
        res.json(rows)
    } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).json({ error: 'Failed to fetch data' })
    }
})




