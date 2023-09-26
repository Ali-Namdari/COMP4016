const express = require('express')
const app = express()
const port = 8080
app.use(express.json());

app.get('/foo', (req, res) => {
    res.send('bar')
})

app.post('/hello', (req, res) => {
    res.send("Hello " + req.body.name + "!")
})

app.get('/kill', (req, res) => {
    console.log("Shutting down...")
    server.close();
    res.send("goodbye!")
})

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})