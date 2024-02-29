import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import route from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider route={route}/>
  </React.StrictMode>
)
