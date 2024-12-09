import { useState } from "react"
import "./article.style.css"
import { useEffect } from "react"

export const CardFullArticle = ({title}) => {

    // todo: komponenta CardFullArticle přijme jenom komponentu ID, title načte pomocí fetch
    const [mojeData, setMojeData] = useState({})

    //todo: fetch(`https://www.casopiskabinet.sk/wp-json/wp/v2/posts/${id}`)
    const getPromisePostId = (id) => {

        return new Promise((resolve) => {
            const postId = {
                id: id,
                date: "15. decembra 2024",
                author: "Eva Pariláková",
                title: {
                rendered: "DOTÝKAŤ SA TRHLÍN"
                },
                content: "obsah"
            }        
            resolve(postId);
        });
    };

    getPromisePostId(5).then((response) => setMojeData(response))

    return (
        <main>
            <article className="article">
                <header className="article__header">
                    {/* bug: nechce načíst {mojeData.title.rendered} */}
                    <h1 className="article__title">{title}</h1>
                    <span className="article__author">{mojeData.author}</span>
                    <span className="article__date">{mojeData.date}</span>
                </header>

                <section className="article__content">{mojeData.content}</section>
            </article>
        </main>
    )
}