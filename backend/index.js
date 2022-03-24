const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/javascript', (req, res) => {
  res.send('Get some javascript')
})

app.get('/javascript', (req, res) => {
  res.send('Success')
})

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
