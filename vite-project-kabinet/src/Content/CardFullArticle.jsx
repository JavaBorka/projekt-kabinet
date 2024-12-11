import { useState } from "react"
import "./article.style.css"
import { useEffect } from "react"
import { useLocation } from "react-router"

export const CardFullArticle = () => {

    const [item, setItem] = useState({})

    const location = useLocation();
    const { id } = location.state

    const getPostObject = async () => {

        const reqPost = await fetch(`https://www.casopiskabinet.sk/wp-json/wp/v2/posts/${id}`)
        const post = await reqPost.json()
    
        // todo: Keď odmažem z textu html tagy, tak sa mi vypne formátovanie. To nechcem. Chcem mať nastavené medzeri medzi odstavcami.
        // GPTčko radí použiť dangerouslySetInnerHTML. Je to OK? Znie to creepy :)
    
        const stripHtmlTags = (html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            return doc.body.textContent || "";
        };
    
        return {
            title: post.title.rendered,
            author: "Názov autora",
            date: post.date,
            content: stripHtmlTags(post.content.rendered)
        }
    }

    useEffect(() => {
        getPostObject().then((data) => {
            setItem(data)
        })
    }, [])

    return (
        <main>
            <article className="article">
                <header className="article__header">
                    <h1 className="article__title">{item.title}</h1>
                    <span className="article__author">{item.author}</span>
                    <span className="article__date">{item.date}</span>
                </header>

                <section className="article__content">{item.content}</section>
            </article>
        </main>
    )
}