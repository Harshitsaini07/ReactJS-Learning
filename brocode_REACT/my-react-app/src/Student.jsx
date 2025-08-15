// import React from 'react';
import Proptypes from 'prop-types';


function Student(props) {
  return (
    <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.name}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.proptypes = {
    name: Proptypes.string,
    age: Proptypes.number,
    isStudent: Proptypes.bool,
}

export default Student;