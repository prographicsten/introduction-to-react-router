import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    // console.log(users);

    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                users.map((user, idx) => <User key={idx} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;