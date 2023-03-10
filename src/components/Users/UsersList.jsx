import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, id) => (
          <li key={id}>
            {user.name} ({user.age} years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
