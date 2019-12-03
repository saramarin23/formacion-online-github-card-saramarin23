import React from "react";
import GitHubLogo from "../../assets/spidertocat.png";

import "./Card.css";

const Card = props => {
  const { detailedUser } = props;
  // const filteredUser = students.filter(
  //   student => student.login === selectedUser
  // );
  // const thisUser = filteredUser[0]; //Porque filteredUser devuelve un array de objetos de un solo elemento
  if (detailedUser === undefined) {
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
          src={detailedUser.avatar_url}
          alt={detailedUser.login}
        />
        <div className="name_container">
          <span className="user_nickname">@{detailedUser.login}</span>
          <p className="user_name">{detailedUser.name}</p>
          <p>📍{detailedUser.location}</p>
        </div>
        <div className="followers_container">
          <p className="text">
            <span className="number">{detailedUser.public_repos}</span> Repos
          </p>
          <p className="text">
            <span className="number">{detailedUser.followers}</span> Followers
          </p>
          <p className="text">
            <span className="number">{detailedUser.following}</span> Following
          </p>
        </div>
      </div>
    );
  }
};

export default Card;
