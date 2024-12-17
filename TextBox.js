import { useState } from "react";

let textBoxComp = () => {
  let [displaytext, setDisplayText] = useState("Welcome to the World");

  let onTypeHandler = (e) => {
    setDisplayText(e.target.value);
  };

  return (
    <>
      <h3>{displaytext}</h3>
      <input type="text" value={displaytext} onChange={onTypeHandler} />
    </>
  );
};

export default textBoxComp;
