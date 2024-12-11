export const getPostsWithCategoryName = async () => {

    const reqPosts = await fetch(`/assets/constants/posts.json`)
    const posts = await reqPosts.json()

    const reqCategories = await fetch(`/assets/constants/categories.json`)
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
        // todo: pridať žánre vo WP
        // todo: nastaviť WP tak, aby šlo pridávať fotky
        // todo: nastaviť WP tak, aby mal autor svoju vlastnú kolonku

        return {
            author: post.author,
            date: post.date,
            perex: post.excerpt.rendered,
            id: post.id,
            image: post.image,
            title: post.title.rendered,
            genre: newPostCategsArray.join(),                
        }
    })

    return updatedPosts
}