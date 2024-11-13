import "./content.style.css"
import { Card } from "./Card.jsx"


export const Content = ({articles}) => {

  return (
        <main>
            <section className="card__container">
              {articles.map(article =>
                <Card key={article.id} genre={article.zaner} title={article.nazov} author={article.autor} content={article.obsah} image={article.foto} />
              )}
            </section>
        </main>
  )
}