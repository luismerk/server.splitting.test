require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'I am a homepage' })
})

app.get('/cart', (req, res) => {
  res.json({ message: 'I am a cart page' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
