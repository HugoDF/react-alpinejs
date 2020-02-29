import React from 'react';
// eslint-disable-next-line import/no-unassigned-import
import 'alpinejs';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';

const Hello = ({who}) => <p>Hello {who}</p>;

Hello.propTypes = {
  who: PropTypes.string.isRequired
};

window.counter = function() {
  return {
    count: 0,
    inc() {
      this.count += 1;
    }
  };
};

const alpineString = `<div x-data="counter()">
  <button @click="inc()">Increment</button>
  <p x-text="count"></p>
</div>`;

const App = () => (
  <>
    <Hello who="React AlpineJS Demo" />
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{__html: alpineString}} />
    <p>Run this with</p>
    <code>npm start</code>
    <p>Build it with</p>
    <code>npm run build</code>
  </>
);

ReactDOM.render(<App />, document.querySelector('#app'));
