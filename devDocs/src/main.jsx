import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { GlobalStyle } from './global'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle/>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
