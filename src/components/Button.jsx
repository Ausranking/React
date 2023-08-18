import React, { useState } from "react";

const add = "add";
const sub = "sub";
const Button = () => {
  const [Count, SetCount] = useState(0);

  function HandleCount(event, addOrSub, number) {
    if (addOrSub === add) {
      SetCount((currCount) => currCount + number);
    } else if (addOrSub === sub) {
      SetCount((currCount) => currCount - number);
    } else {
      alert("incorrect input");
    }
  }

  // not that vanilla js did not work in a function to change a state
  // let Count = 0;
  // const HandleCount = ()=> {
  //     Count = Count +1 ;
  // }
  return (
    <div>
      <h1 className="text-2xl ">{Count}</h1>

      <button
        onClick={(event) => {
          HandleCount(event, "sub", 5);
        }}
        className="btn w-22 text-white rounded-lg"
      >
        Change Count
      </button>
    </div>
  );
};

export default Button;
