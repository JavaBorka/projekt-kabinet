import "./content.style.css"
import { Card } from "./Card.jsx"


export const Content = ({articles}) => {

  return (
        <main>
            <section className="card__container">
              {articles.map(article =>
                <Card key={article.id} genre={article.genre} title={article.title} author={article.author} content={article.content} image={article.image} />
              )}
            </section>
        </main>
  )
}