import React from "react";
import { Slide, Step, Quote } from "../components";

const S = () => (
  <Slide title="One-Way Flow of Immutable Data">
    <Step index={0}>
      <p>
        Popularized concept of <b>data down, actions up</b> -- children cannot
        directly update parents
      </p>
      <p>
        Popularized concept of <b>immutable data</b> -- changes return new state
        instead of modifying existing state
      </p>
    </Step>
    <Step index={1} title="React (2013)">
      <Quote>
        Changes are too hard to understand. I can do my job better if you follow
        these rules.
      </Quote>
      <p>
        No explicit data bindings; enforces strict parent-to-child data flow
      </p>
      <p>
        Instead of tracking changes, generates a <b>virtual copy</b> of the
        entire DOM tree on every change -- this is fast due to{" "}
        <b>shallow equality dirty checking</b>, which is allowed due to
        immutability
      </p>
      <p>
        On change, the old and new VDOM are diffed, and this is used to
        efficiently patch the actual DOM
      </p>
      <h3>Limitations</h3>
      <p>
        Strict rules on data passing make it hard to manage deeply nested trees
        and adds boilerplate for child-to-parent communication
      </p>
      <p>
        Reliance on shallow equality means no models; difficult to manage
        complex data
      </p>
      <p>Many new paradigms all at once</p>
    </Step>
    <Step index={2}>
      <p>
        Honorable mentions: <b>Elm (2012)</b>, <b>Om (2014)</b>,{" "}
        <b>CycleJS (2015)</b>
      </p>
    </Step>
  </Slide>
);

S.label = "One-Way Data Flow";

export default S;
