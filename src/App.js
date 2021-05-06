import React, { useState } from 'react'
import StudentForm from './StudentForm'
import StudentList from './StudentList'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [students, setStudents] = useState([])

  const onAddStudent = newStudentContent => {
    setStudents([
      ...students,
      {
        id: Math.floor(Math.random() * 1000),
        content: newStudentContent
      }
    ])
  }
  return (
    <>
      <StudentForm onAddStudent={onAddStudent}/>
      <StudentList students={students} />
    </>
  )
  
}

export default App

