import React, { useState } from 'react';

function Form(props) {
    const { initialTeamMembersForm } = props;
    const { name, email, role} = initialTeamMembersForm

    return (
        <form>
            <label htmlFor="nameInput">Name</label>
            <input maxLength={50} value={name} id='nameInput' type='text'/>

            <label htmlFor="emailInput">Email</label>
            <input value={email} id='emailInput' type='text'/>

            <label htmlFor="roleInput">Role</label>
            <input value={role} id='roleInput' type='text'/>
        </form>
    )
}

export default Form;