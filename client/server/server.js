const express = require('express')
const app = express()
const port = 4000

app.get('/api/host', (req, res) => {
    res.send( {host: 'Crong !'})
})
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})