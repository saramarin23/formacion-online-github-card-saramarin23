import React from "react";
import GitHubLogo from "../../assets/spidertocat.png";

import "./Card.css";

// const fetchUser = () => {
//   const user = `api.github.com/users/${thisUser}`;
//   user.fetch(response => response.json())
// }

const Card = props => {
  const { students, selectedUser } = props;
  const filteredUser = students.filter(
    student => student.login === selectedUser
  );
  const thisUser = filteredUser[0]; //Porque filteredUser devuelve un array de objetos de un solo elemento
  console.log(thisUser);
  if (thisUser === undefined) {
    return (
      <div>
        <img src={GitHubLogo} alt="Logo de GitHub" />
      </div>
    );
  } else {
    return (
      <div className="user_container">
        <img
          className="user_photo"
          src={thisUser.avatar_url}
          alt={thisUser.login}
        />
        <div className="name_container">
          <span className="user_nickname">@{thisUser.login}</span>
          <p>{thisUser.name}</p>
          <p>📍{thisUser.location}</p>
        </div>
        <div className="followers_container">
          <p>{thisUser.public_repos} Repos</p>
          <p>{thisUser.followers} Followers</p>
          <p>{thisUser.following} Following</p>
        </div>
      </div>
    );
  }
};

export default Card;
