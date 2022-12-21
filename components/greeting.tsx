import React from "react";

type PropsType = {
  message: String;
  name: String;
};

const Greeting = ({ message, name }: PropsType) => {
  return <h3>{`${message} ${name}`}</h3>;
};

export default Greeting;
