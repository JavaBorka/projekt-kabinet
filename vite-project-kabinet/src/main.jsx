import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import { App } from './App.jsx'
import { CardDetail } from "./Content/CardDetail.jsx"
import { ROUTE_ESSAYS } from "./constants/routes.js"
import { ROUTE_TEXTS } from "./constants/routes.js"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path={`/${ROUTE_ESSAYS}/:title`} element={<CardDetail/>}/>
      <Route path={`/${ROUTE_TEXTS}/:title`}  element={<CardDetail/>}/>
    </Routes>
  </BrowserRouter>
)