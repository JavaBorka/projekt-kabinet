import { useEffect } from "react"
import { useParams } from "react-router"
import { fetchSlugPost } from "../constants/fetchSlugPost"
import { genresName } from "../constants/WPcategories.constants"
import { useNavigate } from "react-router"

export const RedirectOldArticle = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchSlugPost(slug).then((data) => {
            const post = data[0]
            const category = post.categories[0]
            const genre = genresName[category]
            const id = post.id

            if ( genre === "eseje") {
                navigate(`/eseje/${id}-${slug}`, { replace: true })
            }
            else {
                navigate(`/texty/${genre}/${id}-${slug}`, { replace: true })
            }
        })
    }, [slug, navigate])

    return null
}