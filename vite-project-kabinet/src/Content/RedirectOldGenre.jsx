import { useEffect } from "react"
import { useNavigate } from "react-router"
import { newGenreSlug } from "../constants/WPcategories.constants"
import { useParams } from "react-router"

export const RedirectOldGenre = () => {
    
    const navigate = useNavigate()
    const { genre } = useParams()

    useEffect(() => {

        if (window.location.pathname === `/category/${genre}`) {

            if (genre === "esej") {
                navigate(`/${newGenreSlug[genre]}`, { replace: true });
            }

            else {
                navigate(`/texty/${newGenreSlug[genre]}`, { replace: true });
            }
        }

      }, [navigate]);

    return null
}