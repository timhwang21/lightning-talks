import React from "react";

import "./Quote.css";

export default ({ children }) => (
  <p className="quote">
    <i>{children}</i>
  </p>
);
