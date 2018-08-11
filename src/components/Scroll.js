import React from "react";

const Scroll = props => {
  const scrollStyle = {
    overflowY: "scroll",
    border: "5px solid black",
    height: "800px"
  };

  return <div style={scrollStyle}>{props.children}</div>;
};

export default Scroll;
