const express = require('express')
const blogRouter = require('./router/blogRouter')
const databaseConnect = require('./db/db')
const cors = require('cors')
const path = require('path');
const app = express()
const port = 3000

app.use(cors())
databaseConnect()
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(blogRouter)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})