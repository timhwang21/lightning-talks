import React from "react";
import { Slide, Step, Quote } from "../components";

const S = () => (
  <Slide title="Bonus: data management layers II">
    <Step index={0}>
      <p>
        With the advent of dedicated view libraries, specialized data management
        libraries have appeared for managing API data (but also UI state)
      </p>
    </Step>
    <Step index={1} title="Redux (2015)">
      <Quote>
        Flux CQRS is nice, but so is Om's immutability and single state atom...
      </Quote>
      <p>
        Every update creates a new state tree with unchanged parts preserved,
        providing efficient updates via structural sharing
      </p>
      <p>
        All updates happen in a single event stream, providing replayability and
        time-travel
      </p>
      <h3>Limitations</h3>
      <p>
        Redux gets its power from its contraints; its constraints tend to lead
        to lots of boilerplate
      </p>
    </Step>
    <Step index={2} title="GraphQL clients (Apollo, Relay...) (2015+)">
      <Quote>
        You don't need to worry about data management if we give you data in the
        exact shape you need, and cache so aggressively that everything is
        instant
      </Quote>
      <p>
        Provides a system for writing queries that describe the shape of the
        requested data
      </p>
      <p>
        Built-in caching, so no need to check if a fetch needs to be done; aware
        of mutations, which gives automatic cache-busting
      </p>
      <p>
        Structural sharing; when querying after a mutation, retains unchanged
        data and re-fetches what might have changed
      </p>
      <h3>Limitations</h3>
      <p>Backend dependency; very complex with many new paradigms</p>
    </Step>
  </Slide>
);

S.label = "Bonus: data management layers II";

export default S;
