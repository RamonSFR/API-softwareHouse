import dotenv from 'dotenv'
import express from 'express'
import { Express } from 'express'
import { router as userRoutes } from './routes/studentRoutes'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger'

dotenv.config()

const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

const app: Express = express()
const port: number = Number(process.env.PORT) || 3000

app.use(express.json())
app.use(userRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)) // <-- Add this line
app.use(express.static(pathToSwaggerUi))

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
  console.log(`Swagger docs at http://localhost:${port}/api-docs`)
})
