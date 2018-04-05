import React from "react";
import { Step } from "react-presents";

export default ({ index, title, children }) => (
  <Step index={index}>
    {!!index && <hr />}
    <h2>{title}</h2>
    {children}
  </Step>
);
