import React from 'react';
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

  const onFormInput = e => {
    setTeamMembersForm({...teamMembersForm, [e.target.id]: e.target.value});
  }

  const addTeamMember = e => {
    e.preventDefault();
    const newFriend = {
      id: uuid(),
      name: teamMembersForm.name,
      email: teamMembersForm.email,
      role: teamMembersForm.role,
    }
    setTeamMembersList(initialTeamMembersList.concat(newFriend));
    setTeamMembersForm(initialTeamMembersForm);
  }

  return (
    <div className="App">
      <Form teamMembersForm={teamMembersForm} addTeamMember={addTeamMember} onFormInput={onFormInput} />
      {teamMembersList.map(member => (<div key={member.id}>Name: {member.name}, Email: {member.email}, Role: {member.role}</div>))}
    </div>
  );
}

export default App;
