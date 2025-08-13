import {config} from 'dotenv'

config()
//"process" es un objeto global de node, "env" almacena todas las variables que tiene el computador y PORT es una de esas variables
//El primero es el puerto 3000 que es del servidor y el segundoe es del puerto de la base de datos
//URL local para la conexión con railway: mysql://root:oAQVABpHSiZtFaxjRVlrfEOvAJaHOWaK@mysql.railway.internal:3306/railway
//URL pública para la conexión de la base de datos de railway con Mysql workbench: mysql://root:oAQVABpHSiZtFaxjRVlrfEOvAJaHOWaK@turntable.proxy.rlwy.net:11170/railway
export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'admin'
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'
export const DB_PORT = process.env.DB_PORT || 3306