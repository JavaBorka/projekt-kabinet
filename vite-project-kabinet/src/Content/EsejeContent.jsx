import "./content.style.css"
import { EsejeLoadedList } from "./EsejeLoadedList.jsx"
import { EsejePaginatedList } from "./EsejePaginatedList.jsx"
import { LoadedList } from "./LoadedList.jsx"
import { useState, useEffect } from "react"


export const EsejeContent = () => {

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  useEffect(() => {

    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  return (
    <main>
    { viewportWidth < 600
      ? <EsejeLoadedList/>
      : <EsejePaginatedList/>
    }
    </main>
  )
}