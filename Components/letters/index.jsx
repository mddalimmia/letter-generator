import React from "react";

function Letters({ details }) {
  return (
    <div key={details.id}>
      <h4>{details.title}</h4>
    </div>
  );
}

export default Letters;
