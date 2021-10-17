const express = require('express')
const app = express()
const {port, environment} = require('./env')

app.get('/', (req, res) => {
    res.json({msg: environment})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
