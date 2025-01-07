import { BASE_API_URL } from "./WPbaseAPI.constants.js";
import { stripHTMLTags } from "../utils/stripHtmlTags.js";
import { WP_CAT_ID_PROSE, WP_CAT_ID_POEM, WP_CAT_ID_DIARY, WP_CAT_ID_INTERVIEW, WP_CAT_ID_REVIEW } from "./WPcategories.constants.js";

export const getPostsPreviewGenre = async (catId, perPage, page, setTotalPages) => {

    // Když kliknu na texty, tak chci aby se mi zobrazili články všech žánrů kromě esejí
    if (catId === "texty") {

        const reqPosts = await fetch(`${BASE_API_URL}/posts?categories=${WP_CAT_ID_PROSE},${WP_CAT_ID_POEM},${WP_CAT_ID_DIARY},${WP_CAT_ID_INTERVIEW},${WP_CAT_ID_REVIEW}&per_page=${perPage}&page=${page}`)
        const totalPages = parseInt(reqPosts.headers.get("X-WP-TotalPages"), 10)
        setTotalPages(totalPages)
        const posts = await reqPosts.json()
    
        const reqCategories = await fetch(`${BASE_API_URL}/categories?_fields=id,name`)
        const categories = await reqCategories.json()
    
        const updatedPosts = posts.map((post) => {
            const postCategsArray = post.categories
            const newPostCategsArray = postCategsArray.map((categoryId) => {
                const categObject = categories.find((category) => category.id === categoryId)
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
    
        return updatedPosts
    }

    // Když kliknu na kterýkoliv žánr (mimo textů), tak chci vidět jenom články z daného žánru
    else {

        const reqPosts = await fetch(`${BASE_API_URL}/posts?categories=${catId}&per_page=${perPage}&page=${page}`)
        // Je potřeba převést na celé číslo v desítkové soustavě
        const totalPages = parseInt(reqPosts.headers.get("X-WP-TotalPages"), 10)
        setTotalPages(totalPages)
        const posts = await reqPosts.json()

        const reqCategories = await fetch(`${BASE_API_URL}/categories?_fields=id,name`)
        const categories = await reqCategories.json()

        const updatedPosts = posts.map((post) => {
            const postCategsArray = post.categories
            const newPostCategsArray = postCategsArray.map((categoryId) => {
                const categObject = categories.find((category) => category.id === categoryId)
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

        return updatedPosts
    }
}