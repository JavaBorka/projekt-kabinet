import { useState } from "react"
import "./article.style.css"
import { useEffect } from "react"
import { useLocation } from "react-router"
import { React } from "react"
import { format } from "date-fns"
import { cs } from "date-fns/locale"

export const CardFullArticle = () => {

    const [item, setItem] = useState({})

    const location = useLocation();
    const { id } = location.state

    const getPostObject = async () => {

        const reqPost = await fetch(`https://www.casopiskabinet.sk/wp-json/wp/v2/posts/${id}`)
        const post = await reqPost.json()
    
        return {
            title: post.title.rendered,
            author: "Názov autora",
            date: format(new Date(post.date), "dd. MM. yyyy", { locale: cs }),
            content: post.content.rendered
        }
    }

    useEffect(() => {
        getPostObject().then((data) => {
            setItem(data)
        })
    }, [])

    // Content obsahuje špeciálne znaky, ktoré potrebujem odstrániť, ale zároveň chcem zachovať štýlovanie. Verím svojmu API, použijem atribút dangerouslySetInnerHtml.
    const cleanHtmlContent = (html) => {

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
    
        // Odstraňte nežádoucí atributy (např. styly)
        doc.querySelectorAll("*").forEach((node) => {
            node.removeAttribute("style");
        });
        
        return doc.body.innerHTML;
    };

    const cleanArticleContent = cleanHtmlContent(item.content)

    return (
        <main>
            <article className="article">
                <header className="article__header">
                    <h1 className="article__title">{item.title}</h1>
                    <span className="article__author">{item.author}</span>
                    <span className="article__date">{item.date}</span>
                </header>

                <section
                    className="article__content"
                    dangerouslySetInnerHTML={{ __html: cleanArticleContent }}
                />
            </article>
        </main>
    )
}