const fs = require('fs')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/javascript', (req, res) => {
  console.log(req.body)
  res.json({ message: 'Success' })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
