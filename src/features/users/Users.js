import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {

  const users = useSelector((state)=> state.users)
  const mappedUsers = users.map((user)=>
    <li>
      <p key={user.username}>{user.username}</p>
    </li>
  )
  console.log(users)
  return (
    <div>
      <ul>
        Users!
        {mappedUsers}
        Total Users: {users.length}
      </ul>
    </div>
  );
}

export default Users;
