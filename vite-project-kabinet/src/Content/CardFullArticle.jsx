import { useState } from "react"
import "./article.style.css"
import { useEffect } from "react"
import { useParams } from "react-router"
import { React } from "react"
import { format } from "date-fns"
import { cs } from "date-fns/locale"

export const CardFullArticle = () => {

    const [item, setItem] = useState({})

    const { id } = useParams()

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
    const addClassToImages = (html) => {

        // odstránění speciálních znaků
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // přidání třídy obrázkům
        const images = doc.querySelectorAll('img')
        images.forEach((img) => {
            img.classList.add("article__img")

            const width = img.getAttribute('width');
            const height = img.getAttribute('height');

            if (parseInt(height) > parseInt(width)) {
                img.classList.add("article__img--tall")
            } else {
                img.classList.add("article__img--wide")
            }
        })
    
        // Odstraňte nežádoucí atributy (např. styly)
        doc.querySelectorAll("*").forEach((node) => {
            node.removeAttribute("style")
        })
        
        return doc.body.innerHTML;
    };

    const modifiedContent = addClassToImages(item.content)

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
                    dangerouslySetInnerHTML={{ __html: modifiedContent }}
                />
            </article>
        </main>
    )
}