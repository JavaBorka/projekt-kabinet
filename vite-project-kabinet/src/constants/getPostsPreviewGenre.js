import { BASE_API_URL } from "../constants/baseApiUrl.js";
import { stripHTMLTags } from "../utils/stripHtmlTags.js";
import { WP_ESSAY } from "./genres.js";

// Argument funkce genre odpovída žánru ve WP. Argument perPage je maximální počet článků, které WP dokáže generovat na 1 stránku (100)
export const getPostsPreviewWithCategoryNameGenre = async (perPage, genre) => {

    const allPosts = []

    const reqFirstPagePosts = await fetch(`${BASE_API_URL}/posts?per_page=${perPage}&page=1`)
    const totalPages = parseInt(reqFirstPagePosts.headers.get("X-WP-TotalPages"), 10)
    const firstPagePosts = await reqFirstPagePosts.json()

    allPosts.push(...firstPagePosts)

    for (let page = 2; page <= totalPages; page++) {
        const reqOtherPagesPosts = await fetch(`${BASE_API_URL}/posts?per_page=${perPage}&page=${page}`)
        const otherPagesPosts = await reqOtherPagesPosts.json()
        allPosts.push(...otherPagesPosts)
    }

    const reqCategories = await fetch(`${BASE_API_URL}/categories?_fields=id,name`)
    const categories = await reqCategories.json()

    //chcem získať pole objektov, kde bude každý objekt obsahovať aj konkrétny názov kategórie
    
    const updatedPosts = allPosts.map((post) => {
        const postCategsArray = post.categories
        const newPostCategsArray = postCategsArray.map((catID) => {
            const categObject = categories.find((category) => category.id === catID )
            return categObject ? categObject.name : "category not found"
        })

        // Aby program správne fungoval, každý článok musí obsahovať vždy práve jednu kategóriu.
        // Kabinet má aktuálne pár článkov takých, kde sú pridelené 2 kategórie

        // todo: Dá sa nastaviť WP tak, aby uživateľ mohol zakliknúť vždy len jednu kategóriu ?
        // Nedá. Muselo by se vytvořit nové pole, které by fungovalo stejně jen s tímhle omezením. Znamenalo by to, že by se musely upravit hodnoty pro všechny články.

        // todo: pridať žánre vo WP
        // todo: nastaviť WP tak, aby šlo pridávať fotky
        // todo: nastaviť WP tak, aby mal autor svoju vlastnú kolonku

        return {
            author: "Název autora",
            perex: stripHTMLTags(post.excerpt.rendered),
            id: post.id,
            image: "",
            title: post.title.rendered,
            genre: newPostCategsArray.join(),                
        }
    })
    
    // Po kliknutí na texty se načtou všechny náhledy článků, kterých kategorie není esej ("texty" nejsou kategorií wordpressu)
    if (genre === "texty") {
        return updatedPosts.filter((post) => post.genre !== WP_ESSAY)
    }
    else {
        return updatedPosts.filter((post) => post.genre === genre)
    }
}