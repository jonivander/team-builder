import React from 'react'

export default function Form (props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit} className='form container'>
            <div className='form-group submit'>
                <h2>Add a Team Member</h2>
                <button disabled={!values.name || !values.email || !values.role}>Submit</button>
            </div>

            <div className='form-group inputs'>
                <h3>Team Member Information</h3>
                <label htmlFor='nameInput'>Name:&nbsp;
                    <input
                    id='nameInput'
                    name='name'
                    type='text'
                    placeholder='Enter member name'
                    maxLength='30'
                    value={values.name}
                    onChange={onChange}
                    />
                </label>

                <label htmlFor='emailInput'>Email:&nbsp;
                    <input
                    id='emailInput'
                    name='email'
                    type='text'
                    placeholder='Enter email'
                    maxLength='30'
                    value={values.email}
                    onChange={onChange}
                    />
                </label>

                <label>Role:&nbsp;
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value=''>Select a Role</option>
                        <option value='frontEnd'>Front End</option>
                        <option value='backEnd'>Back End</option>
                        <option value='designer'>Designer</option>
                        <option value='tl'>Team Lead</option>
                    </select>
                </label>
            </div>
        </form>
    )
}