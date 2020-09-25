import "../assets/styles/Button.scss";

import React from "react";

const Button = (props) => {
  return <button className={"menu-button" + props.id}>{props.texto}</button>;
};

export default Button;
