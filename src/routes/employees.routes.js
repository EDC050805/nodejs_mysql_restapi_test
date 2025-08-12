import { Router } from "express";
import { getEmployees, getEmployee, createEmployees, updateEmployees, deleteEmployees } from '../controllers/employees.controller.js' 

const router = Router()

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee); //":id" es un parámetro y se puede identificar como tal por el dos puntos. Este se extrae de la ruta puesta en el sitio web
router.post('/employees', createEmployees);
router.patch('/employees/:id', updateEmployees);
router.delete('/employees/:id', deleteEmployees);

export default router