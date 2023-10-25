import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './app'
import './app/index.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <Index />
      </BrowserRouter>
  </React.StrictMode>,
)
