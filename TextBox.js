import { useState } from "react";

let textBoxComp = () => {
  let [displaytext, setDisplayText] = useState("Welcome to the World");

  let onTypeHandler = (e) => {
    setDisplayText(e.target.value);
  };

  return (
    <>
      <h3>{displaytext}</h3>
      <textBox onChange={onTypeHandler}></textBox>
    </>
  );
};

export default textBoxComp;
