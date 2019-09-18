import React from 'react';

function Form(props) {
    const { teamMembersForm, addTeamMember, onFormInput } = props;
    const { name, email, role} = teamMembersForm

    const isDisabled = () => {
        return !name || !email || !role;
    }

    return (
        <form onSubmit={addTeamMember}>
            <label htmlFor="name">Name</label>
            <input onChange={onFormInput} maxLength={50} value={name} id='name' type='text'/>

            <label htmlFor="email">Email</label>
            <input onChange={onFormInput} value={email} id='email' type='text'/>

            <label htmlFor="role">Role</label>
            <input onChange={onFormInput} value={role} id='role' type='text'/>

            <button disabled={isDisabled()}>Submit</button>
        </form>
    )
}

export default Form;