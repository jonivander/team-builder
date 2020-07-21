import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'
import Member from './Member'


const initialMembersList = {
  name: 'Jonathan',
  email: 'j.m.warners@gmail.com',
  role: 'Student',
}


const InitialFormValues = {
  name: '',
  email: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialMembersList})
}

const fakeAxiosPost = (url, { name, email, role }) => {
  const newMember = {name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newMember})
}


function App() {
  const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(InitialFormValues)

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue}
    setFormValues(updatedFormValues)
  }

  const submitForm = () => {
    const newMemberFromFormStateClean = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
  }

  if (!newMember.name || !newMember.email || !newMember.role) return

  fakeAxiosPost('fakeAPI.com', newMember)
    .then (res => {
      const memberFromAPI = res.data
      setMembers([memberFromAPI, ...members])
      setFormValues(InitialFormValues)
    })

  useEffect(() => {
    fakeAxiosGet('fakeAPI.com').then(res => setMembers(res.data))
  }, [])

  return (
    <div className="memberList">
      <header><h1>Members:</h1></header>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      
      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
