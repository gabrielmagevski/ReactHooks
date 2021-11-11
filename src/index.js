import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './App';
import UseEffect from './routes/useEffect';
import UseState from './routes/useState';
import Geolocation from './routes/geolocation';


const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="useEffect" element={<UseEffect />} />
      <Route path="useState" element={<UseState />} />
      <Route path="geolocation" element={<Geolocation />} />
    </Routes>
  </BrowserRouter>,
  rootElement

);