import "./article.style.css"

export const CardFullArticle = () => {
    return (
        <article class="article-detail">
            <header class="article-header">
                <h1 class="article-title">Název článku</h1>
                <span class="article-author">Autor: Jan Novák</span>
                <span class="article-date">Publikováno: 24. listopadu 2024</span>
            </header>

            <section class="article-content">
                <p>
                    Obsah článku... Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
            </section>
        </article>
    )
}