import "./content.style.css"
import { GenrePaginatedList } from "./GenrePaginatedList.jsx"
import { GenreLoadedList } from "./GenreLoadedList.jsx"
import { useState, useEffect } from "react"
import { setViewport } from "../utils/setViewport.js"

export const GenreContent = ({catId}) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  useEffect(() => {
    setViewport(setViewportWidth)
  }, [])

  return (
    <main>
    { viewportWidth < 600
      ? <GenreLoadedList catId={catId}/>
      : <GenrePaginatedList catId={catId}/>
    }
    </main>
  )
}