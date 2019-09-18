import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import uuid from 'uuid';
import Form from './Form';

const initialTeamMembersForm = {
  name: '',
  email: '',
  role: '',
};

const initialTeamMembersList = [];

function App() {

  const [teamMembersList, setTeamMembersList] = useState(initialTeamMembersList);
  const [teamMembersForm, setTeamMembersForm] = useState(initialTeamMembersForm)

  // setTeamMembersList({ id: uuid(), name: '', email: '', role: '' });
  const addTeamMember = e => {
    const newFriend = {
      id: uuid(),
      name: teamMembersForm.name,
      email: teamMembersForm.email,
      role: teamMembersForm.role,
    }
  }

  return (
    <div className="App">
      <Form initialTeamMembersForm={initialTeamMembersForm} />
      {teamMembersList.map(member => (<p key={member.id}>name: {member.name}, email: {member.email}, role: {member.role}</p>))}
    </div>
  );
}

export default App;
