const express = require('express')
const app = express()
const port = 3001
const userRoutes = require('./userRoutes')
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})



