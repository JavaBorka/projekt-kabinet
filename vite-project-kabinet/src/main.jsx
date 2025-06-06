import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import { App } from './App.jsx'
import { CardDetailPage } from "./Content/CardDetailPage.jsx"
import { ROUTE_ESSAYS, ROUTE_TEXTS, ROUTE_ABOUT } from "./constants/routes.constants.js"
import { GenreListPreviewPage } from "./Content/GenreListPreviewPage.jsx"
import { GenreListPreviewWrapper } from "./Content/GenreListPreviewWrapper.jsx"
import { WP_CAT_ID_ESSAY, CAT_ID_TEXTS } from "./constants/WPcategories.constants.js"
import { AboutKabinetPage } from "./Content/AboutKabinetPage.jsx"
import { RedirectOldArticle } from "./Content/RedirectOldArticle.jsx"
import { RedirectOldGenre } from "./Content/RedirectOldGenre.jsx"

const root = document.getElementById("root");

////**** Learning ** Použití key v route elementu **////

// Pokud se používá stejná komponenta pro různé trasy, ale komponenta se při změně route nere-renderuje  
// React router nezničí a znovu nevytvoří komponentu, pokud se změní pouze props, ale ne samotná route.
// React využívá klíč (key) pro znovuvytvoření komponenty. Přidání klíče zajistí, že React pochopí, že se jedná o jiný obsah, a re-renderuje komponentu

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App key={"app-root"}/>}/>
      <Route path="/:year/:month/:slug" element={<RedirectOldArticle/>}/>
      <Route path="/category/:genre" element={<RedirectOldGenre/>}/>
      <Route path={`/${ROUTE_ESSAYS}`} element={<GenreListPreviewPage key={ROUTE_ESSAYS} catId={WP_CAT_ID_ESSAY}/>}/>
      <Route path={`/${ROUTE_TEXTS}`} element={<GenreListPreviewPage key={ROUTE_TEXTS} catId={CAT_ID_TEXTS}/>}/>
      <Route path={`/${ROUTE_ABOUT}`} element={<AboutKabinetPage/>} key={ROUTE_ABOUT}/>
      <Route path={`/${ROUTE_TEXTS}/:genre`} element={<GenreListPreviewWrapper/>}/>
      <Route path={`/${ROUTE_ESSAYS}/:title`} element={<CardDetailPage/>}/>
      <Route path={`/${ROUTE_TEXTS}/:genre/:title`}  element={<CardDetailPage/>}/>
    </Routes>
  </BrowserRouter>
)