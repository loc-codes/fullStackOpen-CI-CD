const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  throw 'test error...'
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})
