import React from 'react';
import './App.css';

// Import Components
import UserList from './components/UserList.js';
import AddUser from './components/AddUser.js';

function App() {
  return (
    <div className="App">
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
