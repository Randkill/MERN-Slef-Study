import React from 'react'
import './NewName.css'

const newName = () => {
    addNameHandler = (event) => {
        event.preventDefault();     //prevents frontend from sending any request to the server!

        const nemName = {
            id: Math.random().toString(),
            name: 'NEW NAME'
        }

        console.log(newName)
    }

    return(
        <form className='name-from' onSubmit={}>
            <input type='text'></input>
            <button type="submit">Add Name</button>
        </form>
    )
}

export default newName;