const express = require('express');
const { exec } = require('child_process');
const pool = require('./db')
const port = 3000

const app = express()
app.use(express.json())

//routes
app.get('/', async (req, res) => {
    try {
        /*const data = await pool.query('SELECT * FROM schools')
        res.status(200).send(data.rows)*/
        /*exec('docker exec -it openvpn-server sh /tmp/openvpn-status.log', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing command: ${error.message}`);
                return res.status(500).send('Error executing command');
            }
            if (stderr) {
                console.error(`Command stderr: ${stderr}`);
                return res.status(500).send('Command stderr');
            }
            // Send the response
            console.error(`Success response: ${stderr}`);
            // res.send(stdout);
        });*/
        // return res.status(500).send('helloooo');
    } catch (err) {
        console.log(err)
        return res.status(500).send('Aldaa /');
    }
})

/*app.post('/', async (req, res) => {
    const { name, location } = req.body
    try {
        await pool.query('INSERT INTO schools (name, address) VALUES ($1, $2)', [name, location])
        res.status(200).send({ message: "Successfully added child" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})*/

app.get('/setup', async (req, res) => {
    try {
        await pool.query('CREATE TABLE clientDataUsage( id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100), data VARCHAR(100))')
        res.status(200).send({ message: "Successfully created table" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))