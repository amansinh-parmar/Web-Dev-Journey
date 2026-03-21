import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Middleware to handle "CORS"
app.use(cors({
    origin: process.env.FRONT_END_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders:["Content-Type", "Authorization"]
}))

// Middleware to handle JSON object in req body
app.use(express.json())


// APIs
app.get('/', (req, res)=> {
    res.send('Hello Backend Developer.. :)')
})

app.get('/login', (req, res)=> {
    res.send('This is your LOGIN PAGE:')
})

// Server Connection
app.listen(3000, ()=> {
    console.log(`Server Port Connect: 3000`)
})