import { Router } from 'express'
import studentController from '../controller/studentController'

export const router = Router()

router.get('/students', studentController.getAllStudents)
router.get('/students/:id', studentController.getStudentById)
router.post('/students', studentController.createStudent)
router.delete('/students/:id', studentController.deleteStudent)
