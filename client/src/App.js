import React, {useState} from 'react';
import './App.css';

// Import Components
import UserList from './components/UserList.js';
import AddUser from './components/AddUser.js';

function App() {
  const [users, setUsers] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  
  return (
    <div className="App">
      <AddUser users={users} setUsers={setUsers} setIsUpdated={setIsUpdated} isUpdated={isUpdated} />
      <UserList users={users} setUsers={setUsers} isUpdated={isUpdated} />
    </div>
  );
}

export default App;
