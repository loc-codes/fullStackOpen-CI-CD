const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

// eslint-disable-next-line
app.get('/health', (req, res) => { 
  // eslint-disable-next-line
  console.log('testing a pr to see if it skips making a release')
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})
