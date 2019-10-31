import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState({});
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then((res) => {
                console.log(res)
                setUsers(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h1>Users:</h1>
        </div>
    )
}

export default UserList;
