import React from 'react'
import './UsersList.css'

import Card from '../../shared/components/UIElements/Card.js';

import UsersItem from './UsersItems.js'

const UsersList = (props) => {
    if(props.items.length === 0) {
        return (
            <Card>
                <div className="center">
                    <h1>No User is Found!</h1>
                </div>
            </Card>
        )
    }

    return(
        <ul className="users-list">
            {props.items.map((user) => {
                return (<UsersItem 
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                />)
            })}
        </ul>
    )
}

export default UsersList;