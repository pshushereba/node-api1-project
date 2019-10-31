import React, {useState} from 'react'
import axios from 'axios';

const AddUser = () => {
    const [userInfo, setUserInfo] = useState({name: "", bio: ""});

    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/users", userInfo)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err))
        };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    name="name"
                    placeholder="Name"
                    value={userInfo.name}
                    onChange={handleChange} />
                <input
                    name="bio"
                    placeholder="Bio"
                    value={userInfo.bio}
                    onChange={handleChange} />
                <button>Add User</button>
            </form>
        </div>
    )
}

export default AddUser;
