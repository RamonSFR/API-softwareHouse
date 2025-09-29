import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Student API',
      version: '1.0.0',
      description: 'API for managing students'
    }
  },
  apis: ['./src/routes/*.ts', './src/controller/*.ts'],
}

const swaggerSpec = swaggerJSDoc(options)
export default swaggerSpec
