import React from "react";
import { Slide, Step, Quote } from "../components";

const S = () => (
  <Slide title="In The Beginning...">
    <Step index={0} title="Server Rendering">
      <Quote>
        Change detection? That's the server's job. I just show whatever the
        server gives me.
      </Quote>
      <h3>Limitations</h3>
      <p>All-or-nothing: entire page is discarded on change</p>
    </Step>
  </Slide>
);

S.label = "In The Beginning...";

export default S;
