import React from 'react';
// eslint-disable-next-line import/no-unassigned-import
import 'alpinejs';
import ReactDOM from 'react-dom';

window.counter = function() {
  return {
    count: 0,
    inc() {
      this.count += 1;
    }
  };
};

const alpineTemplate = `<div x-data="counter()">
  <button @click="inc()">Increment</button>
  <p x-text="count"></p>
</div>`;

const AlpineWidget = () => (
  // eslint-disable-next-line react/no-danger
  <div dangerouslySetInnerHTML={{__html: alpineTemplate}} />
);

const App = () => (
  <>
    <h2>Running AlpineJS inside React</h2>
    <AlpineWidget />
  </>
);

ReactDOM.render(<App />, document.querySelector('#app'));
