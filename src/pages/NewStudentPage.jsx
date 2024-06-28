/* {
    "_id": "1",
    "firstName": "Christine",
    "lastName": "Clayton",
    "email": "christine.clay@example.com",
    "phone": "567-890-1234",
    "linkedinUrl": "https://linkedin.com/in/christineclaytonexample",
    "languages": ["English", "Dutch"],
    "program": "Web Dev",
    "background": "Computer Engineering",
    "image": "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-3.png",
    "cohort": "WD BER 2024-03",
    "projects": []
  } */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const generateInitialState = () => {
  return {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedinUrl: 'https://linkedin.com/in/christineclaytonexample',
    languages: ['English', 'Dutch'],
    program: 'Web Dev',
    background: 'Computer Engineering',
    image:
      'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-3.png',
    cohort: 'WD BER 2024-03',
    projects: [],
    _id: uuidv4(),
  }
}

const NewStudentPage = ({ addStudent }) => {
  const navigate = useNavigate()

  /*   const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('') */

  const [newStudent, setNewStudent] = useState(generateInitialState())

  const handleSubmit = event => {
    event.preventDefault()
    addStudent(newStudent)
    setNewStudent(generateInitialState())
    // navigate(`/students/${newStudent._id}`)
  }

  const handleChange = event => {
    const currentName = event.target.name
    const currentValue = event.target.value
    console.log({ currentName, currentValue })
    setNewStudent({ ...newStudent, [currentName]: currentValue })
  }

  return (
    <>
      <h1>New Student</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First name
          <input name='firstName' value={newStudent.firstName} onChange={handleChange} />
        </label>

        <label>
          Last name
          <input name='lastName' value={newStudent.lastName} onChange={handleChange} />
        </label>

        <label>
          Email
          <input name='email' value={newStudent.email} onChange={handleChange} />
        </label>

        <label>
          Phone
          <input name='phone' value={newStudent.phone} onChange={handleChange} />
        </label>
        <button type='submit'>Add Student</button>
      </form>
    </>
  )
}

export default NewStudentPage
