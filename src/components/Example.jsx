import React from "react";
import { useState } from "react";
import ActiveButton from "./ActiveButton";

const Example = () => {
    const [button, Setbutton] = useState(true);
    
  const handleChange = () => {
    Setbutton(!button);
    };
    
  const message = () => {
    alert("You Bookmarked My Page");
  };
  return (
    <div>
      <h1>This is a test</h1>
      <div>
        {button ? (
          <button onClick={handleChange}>Bookmark</button>
        ) : (
          <ActiveButton />
        )}
      </div>
    </div>
  );
};

export default Example;
