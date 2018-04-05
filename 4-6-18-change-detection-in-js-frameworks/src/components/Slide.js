import React from "react";
import { ContentSlide } from "react-presents";

export default ({ title, children }) => (
  <ContentSlide>
    <h1>{title}</h1>
    {children}
  </ContentSlide>
);
