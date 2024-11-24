import React from "react"
import ReactDOM from "react-dom/client"
// import { StrictMode } from 'react'
import { BrowserRouter } from "react-router"
// import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'

const root = document.getElementById("root");

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)