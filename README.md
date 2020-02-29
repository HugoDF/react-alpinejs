# React AlpineJS Example

A minimal integration of AlpineJS inside of React.

See it in full [./main.js](main.js).

tl;dr of the integration as per GitHub Issue comment [https://github.com/alpinejs/alpine/issues/201#issuecomment-592946560](https://github.com/alpinejs/alpine/issues/201#issuecomment-592946560):
- you need to register functions as `window.yourFunction`
- you'll get a warnings about using `:` (`Namespace tags are not supported by default. React's JSX doesn't support namespace tags.`), as in `x-on:click` or `:key`.
- `@` won't be supported either

Which means a minimal integration looks as follows, **note**: you only need to `import 'alpinejs'` once in your whole project.

```js
import React from 'react';
import 'alpinejs';

window.hello = function() {
  return {
    count: 0,
    inc() {
      this.count += 1;
    }
  };
};

const alpineString = `<div x-data="hello()">
  <button @click="inc()">Increment</button>
  <p x-text="count"></p>
</div>`;

const AlpineWidget = () => (
  <>
    <div dangerouslySetInnerHTML={{__html: alpineString}} />
  </>
);
```


## Scripts

`npm start`: runs Parcel in dev mode

`npm run build`: run Parcel in build mode (outputs to `./dist`).

## License

Licensed under MIT, see [LICENSE](./LICENSE).
