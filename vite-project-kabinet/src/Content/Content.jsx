import "./content.style.css"
// import { Card } from "./Card.jsx"
import { PaginatedList } from "./PaginatedList.jsx"


export const Content = ({articles}) => {

  return (
    <main>
          <PaginatedList items={articles} itemsPerPage={6}/>
    </main>
  )
}