import React from 'react'
import Navbar from "react-bootstrap/Navbar"


function StudentList({students}) {
  return (
    <>
      <h1>Student List</h1>
      <table>
        <tbody>
          {students.map(student => 
            <Student key={student.id} student={student}/>  
          )}
        </tbody>
      </table>
    </>
  )
}

const Student = ({student}) =>{
    return (
        <tr>
            <td>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">{student.content}</Navbar.Brand>
              </Navbar>
            </td>
        </tr>
    )
}

export default StudentList