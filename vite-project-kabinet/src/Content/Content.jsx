import "./content.style.css"
import { PaginatedList } from "./PaginatedList.jsx"
import { LoadedList } from "./LoadedList.jsx"
import { Menu } from "../Header/Menu.jsx"
import "../Header/menu.style.css"


export const Content = ({articles}) => {

  return (
    <>
      <main>
        <div className="mobile-only">
            <LoadedList items={articles} itemsPerPage={4}/>
        </div>
        <div className="desktop-only">
            <PaginatedList items={articles} itemsPerPage={6}/>
        </div>
      </main>
    </>
  )
}