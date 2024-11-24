import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar';

function Users() {
    const loadedUsers = useLoaderData();
    const [user, setUser] = useState([...loadedUsers]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                alert("Deleted successfully");
                const remaining = user.filter((u) => u._id !== id);
                setUser(remaining); // Update the state with the filtered array
            }
        })
        .catch((error) => console.error("Error:", error));
    };

    return (
        <div>
            <Navbar></Navbar>
            <div>This is Users: {user?.length}</div>
            {user?.map((user) => (
                <div
                    style={{ border: "2px solid red", margin: '10px' }}
                    key={user._id} // Use _id as the unique key
                >
                    <h4>ID: {user._id}</h4>
                    <h4>Name: {user.name}</h4>
                    <h4>Email: {user.email}</h4>
                    <Link to={`/update/${user._id}`}>Update</Link>
                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Users;
