import {PORT} from './config.js'
import app from './app.js'

app.listen(PORT)
console.log("Se está ejecutando el servidor en el puerto", PORT)