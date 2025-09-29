import express from 'express'
import { Express } from 'express'
import { router as userRoutes } from './routes/studentRoutes'

const app: Express = express()
const port: number = 3000

app.use(express.json())
app.use(userRoutes)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
