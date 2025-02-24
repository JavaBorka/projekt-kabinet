import { useState } from "react"
import "./article.style.css"
import { useEffect } from "react"
import { useParams } from "react-router"
import { React } from "react"
import { format } from "date-fns"
import { cs } from "date-fns/locale"
import { BASE_API_URL } from "../constants/WPbaseAPI.constants"

export const CardFullArticle = () => {

    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { title } = useParams()

    const id = title.split("-")[0]

    const getPostObject = async () => {

        const reqPost = await fetch(`${BASE_API_URL}/posts/${id}`)
        const post = await reqPost.json()
    
        return {
            title: post.title.rendered,
            author: post.acf.autor ? post.acf.autor : "Autor XY",
            date: format(new Date(post.date), "dd. MM. yyyy", { locale: cs }),
            content: post.content.rendered
        }
    }

    useEffect(() => {
        getPostObject().then((data) => {
            setItem(data)
            // setTimeout(() => setIsLoaded(false), 1000)
            setIsLoading(false)
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

            img.src = img.src.replace("https://casopiskabinet.sk", "https://api.casopiskabinet.sk")
            img.srcset = img.srcset.replaceAll("https://casopiskabinet.sk", "https://api.casopiskabinet.sk")

            img.classList.add("article__img")

            const width = img.getAttribute('width');
            const height = img.getAttribute('height');

            // Popisek obrázku musí mít stejnou šířku odstavce jako má obrázek
            const figCaption = img.nextElementSibling

            if (parseInt(height) > parseInt(width)) {
                img.classList.add("article__img--tall")
                figCaption && figCaption.classList.add("article__img--tall")

            } else {
                img.classList.add("article__img--wide")
                figCaption && figCaption.classList.add("article__img--wide")
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
        <>
            <main>
                <article className={`article article--width ${isLoading ? "article--hidden-content" : ""}`}>
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
        </>
    )
}