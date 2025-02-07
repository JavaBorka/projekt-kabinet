import { useParams } from "react-router"
import { GenreListPreviewPage } from "./GenreListPreviewPage"
import { genresID } from "../constants/WPcategories.constants"

// Potřebuju získat hodnotu genre a předat jí do klíče routeru
export const GenreListPreviewWrapper = () => {
    const { genre } = useParams() // získám hodnotu parametru :genre
    const catId = genresID[genre]

    return <GenreListPreviewPage catId={catId} key={genre} />
}