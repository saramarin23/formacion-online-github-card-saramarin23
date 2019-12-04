import React from "react";

import "./Select.css";

const Select = props => {
  const { students, selectUser, isLoading } = props;
  return (
    <div>
      <select className="select_input" onChange={selectUser}>
        <option>Selecciona una usuaria</option>
        {students.map(student => {
          return <option key={student.login}>{student.login}</option>;
        })}
      </select>
      {/* Loader: */}
      {isLoading ? (
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : null}
    </div>
  );
};

export default Select;
