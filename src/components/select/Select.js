import React from "react";

import "./Select.css";

const Select = props => {
  const { students, selectUser } = props;
  return (
    <div>
      <select className="select_input" onChange={selectUser}>
        <option>Selecciona una usuaria</option>
        {students.map(student => {
          return <option key={student.login}>{student.login}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
