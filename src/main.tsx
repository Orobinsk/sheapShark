import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './app'
import './app/index.css'
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from 'app/providers/StoreProvider';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
)
