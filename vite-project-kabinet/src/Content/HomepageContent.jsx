import "./content.style.css"
import { PaginatedList } from "./PaginatedList.jsx"
import { LoadedList } from "./LoadedList.jsx"
import { useState, useEffect } from "react"
import { setViewport } from "../utils/setViewport.js"

export const HomepageContent = () => {

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  useEffect(() => {
    setViewport(setViewportWidth)
  }, [])

  return (
    <main>
    { viewportWidth < 600
      ? <LoadedList itemsPerPage={4}/>
      : <PaginatedList itemsPerPage={9}/>
    }
    </main>
  )
}