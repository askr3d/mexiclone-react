import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MexrentApp } from './MexrentApp';

import 'swiper/css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MexrentApp />
    </BrowserRouter>
  </StrictMode>,
)
