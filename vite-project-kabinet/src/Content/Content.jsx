import "./content.style.css"
import { Card } from "./Card.jsx"


export const Content = () => {

  return (
        <main>
            <section className="card__container">
                <Card />
                <Card />
                <Card />
                <Card />        
            </ section>
        </main>
  )
}