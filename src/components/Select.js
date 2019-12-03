import React from "react";

const Select = props => {
  const { students } = props;
  return (
    <select>
      <option>Selecciona una usuaria</option>
      {students.map(student => {
        return <option key={student.login}>{student.login}</option>;
      })}
    </select>
  );
};

export default Select;
