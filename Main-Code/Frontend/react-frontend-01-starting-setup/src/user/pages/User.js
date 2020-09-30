import React from 'react'

import UsersList from '../components/UsersList.js'

const user = () => {
    const USERS = [{
        id: 'u1',
        name: 'Randkill',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Keanu_Reeves_2014.jpg/170px-Keanu_Reeves_2014.jpg',
        places: 3,
    }]
    return(
        <div>
            <UsersList items={USERS}/>
        </div>
    )
}

export default user;