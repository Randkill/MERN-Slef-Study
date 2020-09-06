import React from 'react'
import './UsersList.css'

import UsersItem from './UsersItems.js'

const UsersList = (props) => {
    if(props.items.lenght === 0) {
        return (
            <div>
                <h1>No User is Found!</h1>
            </div>
        )
    }

    return(
        <ul className="users-list">
            {props.items.map((user) => {
                return (<UsersItem 
                    key={user.id}
                    id={user.d}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                />)
            })}
        </ul>
    )
}

export default UsersList;