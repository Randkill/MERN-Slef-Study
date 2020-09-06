import React from 'react'

import UsersList from '../components/UsersList.js'

const user = () => {
    const USERS = [{
        id: 'u1',
        name: 'Randkill',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fappsource.microsoft.com%2Fen-us%2Fproduct%2Fpower-bi-visuals%2FWA104381835%3Ftab%3DOverview&psig=AOvVaw15RAPhwcS6RHHXHVT6t7Fu&ust=1599482404167000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCFuLbG1OsCFQAAAAAdAAAAABAD',
        places: 3

    }]

    return(
        <div>
            <UsersList items={USERS}/>
        </div>
    )
}

export default user;