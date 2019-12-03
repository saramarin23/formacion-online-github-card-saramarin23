import React from "react";

const Card = props => {
  const { students, selectedUser } = props;
  const filteredUser = students.filter(
    student => student.login === selectedUser
  );
  const thisUser = filteredUser[0]; //Porque filteredUser devuelve un array de objetos de un solo elemento
  if (thisUser === undefined) {
    return <div></div>;
  } else {
    return (
      <div>
        <img src={thisUser.avatar_url} alt={thisUser.login} />
        <span>@{thisUser.login}</span>
        <p></p>
        <p></p>
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    );
  }
};

export default Card;
