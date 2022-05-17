const express = require('express')
const app = express()
require('dotenv').config()
const PORT = 3000

const userRoutes = require('./src/routes/userRouter')

app.use(express.json())
app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.send('Server up')
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))