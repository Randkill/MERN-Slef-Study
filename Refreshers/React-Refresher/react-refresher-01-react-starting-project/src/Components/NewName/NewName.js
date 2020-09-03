import React from 'react'
import './NewName.css'

const newName = () => {
    return(
        <form className='name-from'>
            <input type='text'></input>
            <button type="submit">Add Name</button>
        </form>
    )
}

export default newName;