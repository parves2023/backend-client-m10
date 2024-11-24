import { useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar';

function Update() {
    const loadedUser = useLoaderData();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        const updatedUser = { name, email };

        console.log("Updated data:", updatedUser);

        // Send the updated data to the server
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT', // or PATCH
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Update response:", data);
                if (data.modifiedCount > 0) {
                    alert("User updated successfully!");
                } else {
                    alert("No changes were made.");
                }
            })
            .catch((error) => console.error("Error updating user:", error));
    };

    return (
        <div>
            <Navbar></Navbar>
            <h3>Update Information of {loadedUser.name}</h3>

            <form onSubmit={handleUpdate}>
                <input 
                    type="text" 
                    name="name" 
                    defaultValue={loadedUser?.name} 
                /> 
                <br />
                <input 
                    type="email" 
                    name="email" 
                    defaultValue={loadedUser?.email} 
                /> 
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
}

export default Update;
