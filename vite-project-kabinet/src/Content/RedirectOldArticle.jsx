import { useEffect } from "react"
import { useParams } from "react-router"
import { fetchSlugPost } from "../constants/fetchSlugPost"
import { genresName } from "../constants/WPcategories.constants"

export const RedirectOldArticle = () => {
    const { slug } = useParams()

    useEffect(() => {
        fetchSlugPost(slug).then((data) => {
            const post = data[0]
            const category = post.categories[0]
            const genre = genresName[category]
            const id = post.id

            if ( genre === "eseje") {
                const newUrl = (`https://www.casopiskabinet.sk/eseje/${id}-${slug}`)
                window.location.replace(newUrl);

            }
            else {
                const newUrl = (`https://www.casopiskabinet.sk/texty/${genre}/${id}-${slug}`)
                window.location.replace(newUrl);
            }
        })
    }, [slug])
}