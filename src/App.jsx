import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUsers = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            // Fetch updated users from the server
            fetch('http://localhost:5000/users')
                .then((res) => res.json())
                .then((users) => setUsers(users));
            form.reset();
        })
        .catch((error) => console.error("Error:", error));
};


  return (
    <>
    <Navbar></Navbar>
      <h1> React With server</h1>
      <p>numbers of users {users.length}</p>

    <form onSubmit={handleAddUsers}>
    <input type="text" name="name"></input> <br />
    <input type="email" name="email"></input>
    <input type="submit" name="submit" value='Add users'></input>
    </form>


      {users?.map((user) => (
        <div key={user._id}>
          <h4>{user.id}</h4>
          <h4>{user.name}</h4>
          <h4>{user.email}</h4>
        </div>
      ))}
    </>
  );
}

export default App;
