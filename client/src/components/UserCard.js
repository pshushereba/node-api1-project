import React from 'react'

const UserCard = (props) => {
    return (
        <div>
            <h1>{props.user.name}</h1>
            <p>{props.user.bio}</p>
        </div>
    )
}

export default UserCard
