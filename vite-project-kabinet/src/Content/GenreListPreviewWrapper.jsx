import { useParams } from "react-router"
import { GenreListPreviewPage } from "./GenreListPreviewPage"

// Potřebuju získat hodnotu genre a předat jí do klíče routeru
export const GenreListPreviewWrapper = () => {
    const { genre } = useParams() // získám hodnotu parametru :genre
    return <GenreListPreviewPage key={genre} />
}