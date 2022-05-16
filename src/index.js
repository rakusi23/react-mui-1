import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

const App = () => {
  return (
    <section>
      <p>Hello World</p>
    </section>
  );
}
ReactDom.render(<App />, document.getElementById("root"));