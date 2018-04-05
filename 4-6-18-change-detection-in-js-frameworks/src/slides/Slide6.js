import React from "react";
import { Slide, Step, Quote } from "../components";

const S = () => (
  <Slide title="Present Day">
    <Step index={0}>
      <p>
        Frameworks have incorporated good ideas from others, and discarded bad
        ideas
      </p>
    </Step>
    <Step index={1} title="Vue.js (2014)">
      <Quote>
        React is too hard to understand. I can do my job better by not just
        being a view library.
      </Quote>
      <p>
        React, with familiar concepts and some batteries included (models,
        routing, templates...)
      </p>
    </Step>
    <Step index={2} title="Ember 2+ (2015)">
      <Quote>
        DDAU is a good idea, but we'll leave some escape hatches for
        practicality.
      </Quote>
      <p>
        One-way data binding by default; DDAU highly encouraged but not
        explicitly required
      </p>
      <Quote>Virtual DOM is a good idea!</Quote>
      <p>
        Glimmer: lightweight view layer like React that uses virtual DOM for
        efficient updates, where each node is a stream of values
      </p>
    </Step>
    <Step index={3} title="Angular 2+ (2016)">
      <Quote>
        Immutable data is a good idea, our "check everything" strategy can
        actually scale now.
      </Quote>
      <p>
        Provides onPush change detection strategy that checks shallow equality;
        however, mutation can still be used for areas that aren't
        performance-critical
      </p>
    </Step>
  </Slide>
);

S.label = "Present Day";

export default S;
