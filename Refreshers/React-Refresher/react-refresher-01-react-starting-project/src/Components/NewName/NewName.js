import React, { useState } from 'react'
import './NewName.css'

const NewName = (props) => {

    const [enteredText, setEnteredText] = useState([''])

    const addNameHandler = (event) => {
        event.preventDefault();     //prevents frontend from sending any request to the server!

        const nemEnteredName = {
            id: Math.random().toString(),
            name: enteredText
        }

        setEnteredText('')

        props.onAddName(nemEnteredName)
    }

    const textChangeHandler = (event) => {
        setEnteredText(event.target.value)
    }

    return(
        <form className='name-from' onSubmit={addNameHandler}>
            <input type='text' value={enteredText} onChange={textChangeHandler}></input>
            <button type="submit">Add Name</button>
        </form>
    )
}

export default NewName;