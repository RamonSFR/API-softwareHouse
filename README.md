# API-softwareHouse

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

A RESTful API for managing students, built with Node.js, Express, TypeScript, Prisma, and MongoDB.
Includes Swagger UI documentation.

Made for a coding challenge by Software House

---

## Features

- **CRUD operations** for students
- **Swagger UI** API documentation (`/api-docs`)
- **Prisma ORM** with MongoDB

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

---

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/RamonSFR/API-softwareHouse.git
   cd API-softwareHouse
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

---

### Running the API

- **Development mode (with hot reload):**
  ```sh
  npm run dev
  ```

- **Production build:**
  ```sh
  npm run build
  npm start
  ```

---

## API Documentation

- Visit the URL in the console for the API Documentation and tester by Swagger UI.

---

## Endpoints

| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| GET    | `/students`        | List all students          |
| GET    | `/students/{id}`   | Get a student by ID        |
| POST   | `/students`        | Create a new student       |
| DELETE | `/students/{id}`   | Delete a student by ID     |

**Note:**
GET endpoints return an extra field `firstNonRepeatingLetter` for each student, which is the first non-repeating letter in the student's name (or `_` if all letters repeat).

---
