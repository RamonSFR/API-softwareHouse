import { Request, Response } from 'express'
import studentService from '../service/studentService'
import { Student } from '../generated/prisma'

const studentController = {
  async getAllStudents(req: Request, res: Response): Promise<void> {
    const students: Student[] = await studentService.getAllStudents()
    res.json(students)
  },

  async getStudentById(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id, 10)
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: 'Invalid ID. Must be a positive integer.' })
    }

    const student: Student | null = await studentService.getStudentById(id)
    if (!student) {
      res.status(404).json({ message: 'User not found.' })
      return
    }

    res.json(student)
  },

  async createStudent(req: Request, res: Response): Promise<void> {
    const { name, grade } = req.body

    if (typeof name !== 'string' || name.trim() === '') {
      res.status(400).json({ error: 'Name is required and must be a non-empty string.' })
      return
    }
    if (typeof grade !== 'number') {
      res.status(400).json({ error: 'Grade is required and must be a number.' })
      return
    }

    try {
      const lastStudent = await studentService.getLastStudent()
      const id = lastStudent ? lastStudent.id + 1 : 1
      const student: Student = await studentService.createStudent({ id, name, grade })
      res.status(201).json(student)
    } catch (error) {
      res.status(500).json({ error: 'Failed to create student.' })
    }
  },

  async deleteStudent(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id, 10)
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: 'Invalid ID. Must be a positive integer.' })
      return
    }

    try {
      await studentService.deleteStudent(id)
      res.status(204).send()
    } catch (error) {
      res.status(404).json({ error: 'User not found' })
    }
  }
}

export default studentController
