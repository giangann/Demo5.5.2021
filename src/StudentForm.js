import React, { useState } from 'react'

function StudentForm({onAddStudent}) {
  const [value, setValue] = useState('')

  const onFormSubmit = e => {
    e.preventDefault()

    if (!onAddStudent) return
    
    onAddStudent(value)

    setValue('')
  }

  return <form onSubmit={onFormSubmit}>
    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    <input type="submit" value="Add Student"/>
  </form>
}

export default StudentForm