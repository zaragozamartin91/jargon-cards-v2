const express = require('express')
const path = require('path')

const app = express()
const port = 3000

const staticContentDir = path.join(__dirname, 'build')
// Serve static content from the "build/" folder
console.log('Static content folder: ', staticContentDir)
app.use('/jargon-cards-v2', express.static(staticContentDir))

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/jargon-cards-v2`)
})
