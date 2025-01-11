import { stripHTMLTags } from "../utils/stripHtmlTags"

export const getPostsWithGenreName = (posts, categories) => {

    const updatedPosts = posts.map((post) => {
        const postCategsArray = post.categories
        const newPostCategsArray = postCategsArray.map((catID) => {
            const categObject = categories.find((category) => category.id === catID )
            return categObject ? categObject.name : "category not found"
        })

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