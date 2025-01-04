import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import { App } from './App.jsx'
import { CardDetailPage } from "./Content/CardDetailPage.jsx"
import { ROUTE_ESSAYS, ROUTE_TEXTS, ROUTE_PROSE, ROUTE_POEM, ROUTE_DIARY, ROUTE_REVIEW, ROUTE_INTERVIEW } from "./constants/routes.js"
import { GenreListPreviewPage } from "./Content/GenreListPreviewPage.jsx"
import { WP_ESSAY, TEXTS, WP_PROSE, WP_POEM, WP_DIARY, WP_INTERVIEW, WP_REVIEW} from "./constants/genres.js"

const root = document.getElementById("root");

////**** Learning ** Použití key v route elementu **////

// Pokud se používá stejná komponenta pro různé trasy, ale komponenta se při změně route nere-renderuje  
// React router nezničí a znovu nevytvoří komponentu, pokud se změní pouze props, ale ne samotná route.
// React využívá klíč (key) pro znovuvytvoření komponenty. Přidání klíče zajistí, že React pochopí, že se jedná o jiný obsah, a re-renderuje komponentu

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App key={"app-root"}/>}/>
      <Route path={`/${ROUTE_ESSAYS}`} element={<GenreListPreviewPage key={ROUTE_ESSAYS} genre={WP_ESSAY}/>}/>
      <Route path={`/${ROUTE_TEXTS}`} element={<GenreListPreviewPage key={ROUTE_TEXTS} genre={TEXTS}/>}/>
      <Route path={`/${ROUTE_TEXTS}/${ROUTE_PROSE}`} element={<GenreListPreviewPage key={`${ROUTE_TEXTS}-${ROUTE_PROSE}`} genre={WP_PROSE}/>}/>
      <Route path={`/${ROUTE_TEXTS}/${ROUTE_POEM}`} element={<GenreListPreviewPage key={`${ROUTE_TEXTS}-${ROUTE_POEM}`} genre={WP_POEM}/>}/>
      <Route path={`/${ROUTE_TEXTS}/${ROUTE_DIARY}`} element={<GenreListPreviewPage key={`${ROUTE_TEXTS}-${ROUTE_DIARY}`} genre={WP_DIARY}/>}/>
      <Route path={`/${ROUTE_TEXTS}/${ROUTE_INTERVIEW}`} element={<GenreListPreviewPage key={`${ROUTE_TEXTS}-${ROUTE_INTERVIEW}`} genre={WP_INTERVIEW}/>}/>
      <Route path={`/${ROUTE_TEXTS}/${ROUTE_REVIEW}`} element={<GenreListPreviewPage key={`${ROUTE_TEXTS}-${ROUTE_REVIEW}`} genre={WP_REVIEW}/>}/>
      <Route path={`/${ROUTE_ESSAYS}/:title`} element={<CardDetailPage/>}/>
      <Route path={`/${ROUTE_TEXTS}/:title`}  element={<CardDetailPage/>}/>
    </Routes>
  </BrowserRouter>
)