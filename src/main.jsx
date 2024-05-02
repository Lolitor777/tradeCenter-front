import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { TradeCenter } from './TradeCenter'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <TradeCenter />
    </BrowserRouter>
  </React.StrictMode>,
)
