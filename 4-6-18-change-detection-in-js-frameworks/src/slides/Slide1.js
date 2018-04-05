import React from "react";
import { Slide, Step } from "../components";

const S = () => (
  <Slide title="Change Detection in Frontend Frameworks">
    <p>
      Change detection strategy is a key determinant of a frontend framework's
      API
    </p>
    <p>
      A framework's strengths and weaknesses are heavily influenced by how it
      detects changes"
    </p>
    <Step index={1} title="Caveats">
      <p>
        Not all inclusive due to limitations of space and personal experience
      </p>
    </Step>
  </Slide>
);

S.label = "Overview";

export default S;
