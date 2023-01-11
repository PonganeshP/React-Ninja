import React from "react";

function Hello(props) {
  return (
    <div>
      <h2>Hello {props.name}</h2>
      {props.children}
      {console.log(props.children[0].props)}
    </div>
  );
}

export default Hello;
