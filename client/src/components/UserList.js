import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserCard from './UserCard.js';

const UserList = (props) => {

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then((res) => {
                console.log(res)
                props.setUsers(res.data);
            })
            .catch((err) => console.log(err))
    }, [props.isUpdated])

    return (
        <div>
            <h1>Users:</h1>
            {props.users.map((user) => {
                return <UserCard key={user.id} user={user} />
            })}
        </div>
    )
}

export default UserList;
