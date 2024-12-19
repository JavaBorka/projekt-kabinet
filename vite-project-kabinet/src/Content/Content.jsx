import "./content.style.css"
import { PaginatedList } from "./PaginatedList.jsx"
import { LoadedList } from "./LoadedList.jsx"
import { useState, useEffect } from "react"


export const Content = ({articles}) => {

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
      ? <LoadedList items={articles} itemsPerPage={4}/>
      : <PaginatedList itemsPerPage={6}/>
    }
    </main>
  )
}