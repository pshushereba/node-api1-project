import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserCard from './UserCard.js';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then((res) => {
                // console.log(res)
                setUsers(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    console.log(users);

    return (
        <div>
            <h1>Users:</h1>
            {users.map((user) => {
                return <UserCard key={user.id} user={user} />
            })}
        </div>
    )
}

export default UserList;
