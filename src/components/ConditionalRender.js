import React, { useState } from "react";

const ConditionalRender = () => {
  const [renderComp, SetRenderComp] = useState(false); //change state to see efect

  //I was tryna use a tenary operator ? to render conditionally
  //   return renderComp ? (
  //     <h1>This is a conditional Component</h1>
  //   ) : (
  //     <h1>Nothing to render here</h1>
  //   );

  //not good practice to use multiple if-else (DRY)
  if (renderComp) {
    return <h1>This is a conditional Component</h1>;
  } else return <h1>Nothing to render here</h1>;
};

export default ConditionalRender;
