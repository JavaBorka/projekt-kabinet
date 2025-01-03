import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import { App } from './App.jsx'
import { CardDetailPage } from "./Content/CardDetailPage.jsx"
import { ROUTE_ESSAYS } from "./constants/routes.js"
import { ROUTE_TEXTS } from "./constants/routes.js"
import { EssayListPreviewPage } from "./Content/EssayListPreviewPage.jsx"
import { TextsListPreviewPage } from "./Content/TextsListPreviewPage.jsx"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path={`/${ROUTE_ESSAYS}`} element={<EssayListPreviewPage/>}/>
      <Route path={`/${ROUTE_TEXTS}`} element={<TextsListPreviewPage/>}/>
      <Route path={`/${ROUTE_ESSAYS}/:title`} element={<CardDetailPage/>}/>
      <Route path={`/${ROUTE_TEXTS}/:title`}  element={<CardDetailPage/>}/>
    </Routes>
  </BrowserRouter>
)