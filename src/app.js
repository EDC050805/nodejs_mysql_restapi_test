//Para ejecutar el programa usando el nodemon como herramienta de desarrollo, solo se pone en la terminal "npm run dev"
import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())
app.use(indexRoutes)
app.use('/api', employeesRoutes)
//Agregamos un middleware
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;