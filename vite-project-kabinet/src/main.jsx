import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import { App } from './App.jsx'
import { CardDetailPage } from "./Content/CardDetailPage.jsx"
import { ROUTE_ESSAYS, ROUTE_TEXTS, ROUTE_PROSE, ROUTE_POEM, ROUTE_DIARY, ROUTE_REVIEW, ROUTE_INTERVIEW } from "./constants/routes.constants.js"
import { GenreListPreviewPage } from "./Content/GenreListPreviewPage.jsx"
import { WP_CAT_ID_ESSAY, WP_CAT_ID_PROSE, WP_CAT_ID_POEM, WP_CAT_ID_DIARY, WP_CAT_ID_INTERVIEW, WP_CAT_ID_REVIEW, CAT_ID_TEXTS } from "./constants/WPcategories.constants.js"

const root = document.getElementById("root");

////**** Learning ** Použití key v route elementu **////

// Pokud se používá stejná komponenta pro různé trasy, ale komponenta se při změně route nere-renderuje  
// React router nezničí a znovu nevytvoří komponentu, pokud se změní pouze props, ale ne samotná route.
// React využívá klíč (key) pro znovuvytvoření komponenty. Přidání klíče zajistí, že React pochopí, že se jedná o jiný obsah, a re-renderuje komponentu

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App key={"app-root"}/>}/>
      <Route path={`/${ROUTE_ESSAYS}`} element={<GenreListPreviewPage key={ROUTE_ESSAYS} catId={WP_CAT_ID_ESSAY}/>}/>
      <Route path={`/${ROUTE_TEXTS}`} element={<GenreListPreviewPage key={ROUTE_TEXTS} catId={CAT_ID_TEXTS}/>}/>
      <Route path={`/${ROUTE_TEXTS}/${ROUTE_PROSE}`} element={<GenreListPreviewPage key={`${ROUTE_TEXTS}-${ROUTE_PROSE}`} catId={WP_CAT_ID_PROSE}/>}/>
      <Route path={`/${ROUTE_TEXTS}/${ROUTE_POEM}`} element={<GenreListPreviewPage key={`${ROUTE_TEXTS}-${ROUTE_POEM}`} catId={WP_CAT_ID_POEM}/>}/>
      <Route path={`/${ROUTE_TEXTS}/${ROUTE_DIARY}`} element={<GenreListPreviewPage key={`${ROUTE_TEXTS}-${ROUTE_DIARY}`} catId={WP_CAT_ID_DIARY}/>}/>
      <Route path={`/${ROUTE_TEXTS}/${ROUTE_INTERVIEW}`} element={<GenreListPreviewPage key={`${ROUTE_TEXTS}-${ROUTE_INTERVIEW}`} catId={WP_CAT_ID_INTERVIEW}/>}/>
      <Route path={`/${ROUTE_TEXTS}/${ROUTE_REVIEW}`} element={<GenreListPreviewPage key={`${ROUTE_TEXTS}-${ROUTE_REVIEW}`} catId={WP_CAT_ID_REVIEW}/>}/>
      <Route path={`/${ROUTE_ESSAYS}/:title`} element={<CardDetailPage/>}/>
      <Route path={`/${ROUTE_TEXTS}/:title`}  element={<CardDetailPage/>}/>
    </Routes>
  </BrowserRouter>
)