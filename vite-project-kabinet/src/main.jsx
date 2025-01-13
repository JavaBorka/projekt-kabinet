import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import { App } from './App.jsx'
import { CardDetailPage } from "./Content/CardDetailPage.jsx"
import { ROUTE_ESSAYS, ROUTE_TEXTS } from "./constants/routes.constants.js"
import { GenreListPreviewPage } from "./Content/GenreListPreviewPage.jsx"
import { GenreListPreviewWrapper } from "./Content/GenreListPreviewWrapper.jsx"

const root = document.getElementById("root");

////**** Learning ** Použití key v route elementu **////

// Pokud se používá stejná komponenta pro různé trasy, ale komponenta se při změně route nere-renderuje  
// React router nezničí a znovu nevytvoří komponentu, pokud se změní pouze props, ale ne samotná route.
// React využívá klíč (key) pro znovuvytvoření komponenty. Přidání klíče zajistí, že React pochopí, že se jedná o jiný obsah, a re-renderuje komponentu

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App key={"app-root"}/>}/>
      <Route path={`/${ROUTE_ESSAYS}`} element={<GenreListPreviewPage key={ROUTE_ESSAYS}/>}/>
      <Route path={`/${ROUTE_TEXTS}`} element={<GenreListPreviewPage key={ROUTE_TEXTS}/>}/>
      <Route path={`/${ROUTE_TEXTS}/:genre`} element={<GenreListPreviewWrapper/>}/>
      <Route path={`/${ROUTE_ESSAYS}/:id/:title`} element={<CardDetailPage/>}/>
      <Route path={`/${ROUTE_TEXTS}/:genre/:id/:title`}  element={<CardDetailPage/>}/>
    </Routes>
  </BrowserRouter>
)