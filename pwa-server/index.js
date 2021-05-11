const express = require('express')
const path = require('path')
const nocache = require('nocache')
const cors = require('cors')

const app = express()

app.use(express.static('public'))
app.use(nocache())
app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(80, () => console.log(`Http server listening on port 80`))
