import React from "react";
import { Slide, Step, Quote } from "../components";

const S = () => (
  <Slide title="Early Advancements">
    <Step index={0} title="AJAX (~2000s) + jQuery (2006)">
      <Quote>
        Change detection? That's the developer's job. They tell me what node to
        modify and how to do it, and I do it.
      </Quote>
      <p>Can now make changes without completely resetting the page</p>
      <h3>Limitations</h3>
      <p>Doesn't scale well -- organization is entirely up to you</p>
    </Step>
    <Step index={1} title="Backbone (2010)">
      <Quote>
        I'll let you know when changes happen. What you do with them is up to
        you.
      </Quote>
      <p>
        Popularized concept of <b>data models</b>: Data now managed in
        structured, persistent models
      </p>
      <h3>Limitations</h3>
      <p>
        Model changed; now what? Entirely unopinionated about what happens after
        change
      </p>
    </Step>
    <Step index={2}>
      <p>
        Honorable mentions: <b>Rails Turbolinks</b>
      </p>
    </Step>
  </Slide>
);

S.label = "Early Advancements";

export default S;
