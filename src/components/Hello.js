import React, { useEffect } from "react";

function Hello(props) {
  useEffect(() => {
    console.log("Child Useeffect");
  });
  return (
    <div>
      <h2>Hello child</h2>
    </div>
  );
}

export default Hello;
