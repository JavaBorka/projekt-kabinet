import { BASE_API_URL } from "../constants/baseApiUrl.js"
import { stripHTMLTags } from "../utils/stripHtmlTags.js"

export const getPostsPreviewWithCategoryName = async (perPage, setTotalRecords) => {

    const reqPosts = await fetch(`${BASE_API_URL}/posts?per_page=${perPage}&page=1`)
    const totalRecords = reqPosts.headers.get("X-WP-Total")
    setTotalRecords(totalRecords)
    const posts = await reqPosts.json()

    const reqCategories = await fetch(`${BASE_API_URL}/categories?_fields=id,name`)
    const categories = await reqCategories.json()

    //chcem získať pole objektov, kde bude každý objekt obsahovať aj konkrétny názov kategórie
    
    const updatedPosts = posts.map((post) => {
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

    return updatedPosts
}