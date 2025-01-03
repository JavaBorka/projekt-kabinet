import "./content.style.css"
import { GenrePaginatedList } from "./GenrePaginatedList.jsx"
import { GenreLoadedList } from "./GenreLoadedList.jsx"
import { useState, useEffect } from "react"
import { setViewport } from "../utils/setViewport.js"

export const GenreContent = ({genre}) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  useEffect(() => {
    setViewport(setViewportWidth)
  }, [])

  return (
    <main>
    { viewportWidth < 600
      ? <GenreLoadedList genre={genre}/>
      : <GenrePaginatedList genre={genre}/>
    }
    </main>
  )
}