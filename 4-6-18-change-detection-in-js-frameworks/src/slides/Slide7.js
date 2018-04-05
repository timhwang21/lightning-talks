import React from "react";
import { Slide, Step, Quote } from "../components";

const S = () => (
  <Slide title="Bonus: data management layers">
    <Step index={0}>
      <p>
        With the advent of dedicated view libraries, specialized data management
        libraries have appeared for managing API data (but also UI state)
      </p>
    </Step>
    <Step index={1} title="Flux (2013)">
      <Quote>
        By making model-to-view updates and view-to-updates different forms,
        state change is easier to understand.
      </Quote>
      <p>Views subscribe to stores and are notified when store updates</p>
      <p>
        Rather than directly modifying the store, views dispatch actions which
        lead to state updates in the store
      </p>
      <h3>Limitations</h3>
      <p>
        Multiple stores updating asynchronously makes it hard to track what
        caused a change, and when it happened
      </p>
    </Step>
    <Step index={2} title="Ember Data (2014)">
      <Quote>
        Our data is too messy; let's store our data as models with schemas,
        available to all controllers.
      </Quote>
      <p>
        Provides a dedicated model layer and ORM-like syntax, with everything
        you'd expect from models
      </p>
      <p>
        Comes with batteries attached compared to other options; with the right
        adapters you can write very little code
      </p>
      <h3>Limitations</h3>
      <p>Works best with RESTful APIs</p>
    </Step>
  </Slide>
);

S.label = "Bonus: data management layers";

export default S;
