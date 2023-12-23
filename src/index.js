import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import App from "./app.js";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    {/* <StateProvider initialState={initialState} reducer={reducer}> */}
      <App />
    {/* </StateProvider> */}
  </BrowserRouter>
);
