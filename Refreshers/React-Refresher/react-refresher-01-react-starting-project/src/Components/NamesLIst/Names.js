import React from 'react'
import './Names.css'

const names = (props) => {
    console.log(props.items)
    const Names = props.items.map((x) => {
        return(
        <li key={x.id}>{x.name}</li>
        )
    })

    return (
        <div>
    <ul className="name-list">
      {Names}
    </ul>
        </div>
    )
}

export default names;