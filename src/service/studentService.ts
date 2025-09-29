import prisma from '../prisma'
import { Student } from '../generated/prisma'

const studentService = {
  async getAllStudents(): Promise<Student[]> {
    return prisma.student.findMany()
  },

  async getStudentById(id: number): Promise<Student | null> {
    return prisma.student.findUnique({ where: { id } })
  },

  async createStudent(data: { id: number; name: string; grade: number }): Promise<Student> {
    return prisma.student.create({ data })
  },

  async getLastStudent(): Promise<Student | null> {
    return prisma.student.findFirst({ orderBy: { id: 'desc' } })
  }
}

export default studentService
