import "./App.css";
import { React, useEffect, useMemo, useRef, useState } from "react";

const App = () => {
  const [value, setvalue] = useState("");
  const renderedCount = useRef(1);
  const previousValue = useRef("");
  const [dark, setdark] = useState(false);

  const themeStyle = useMemo(() => {
    return {
      theme: {
        background: dark,
      },
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme style use effect executed");
  }, [themeStyle]); // thoungh input is not given in dependency it will excuted

  //Use Case 1: // setState in useEffect is not good

  // useEffect(() => {
  //   setrenderedCount((prev) => prev + 1);
  // });

  useEffect(() => {
    renderedCount.current = renderedCount.current + 1;
    console.log("Hello");
  });

  //Use Case 2: // for accessing DOM element
  let element = useRef(); // element.current.focus()

  //Use Case 3: // store previous values
  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return (
    <div>
      <input
        ref={element}
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
      <div>
        My name is {value} and used to be {previousValue.current}
      </div>
      <div> times rendered: {renderedCount.current}</div>
      <button
        onClick={() => {
          setdark((prev) => !prev);
        }}
      >
        {" "}
        Change Theme{" "}
      </button>
    </div>
  );
};

export default App;
