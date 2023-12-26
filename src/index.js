import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./app.js";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    {/* <StateProvider initialState={initialState} reducer={reducer}> */}
      <App />
    {/* </StateProvider> */}
  </BrowserRouter>
);
