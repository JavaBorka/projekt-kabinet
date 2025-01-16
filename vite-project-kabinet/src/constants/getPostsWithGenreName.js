import { stripHTMLTags } from "../utils/stripHtmlTags"
import { getImage } from "./getImage"

export const getPostsWithGenreName = (posts, categories) => {

    const updatedPosts = posts.map((post) => {
        const postCategsArray = post.categories
        const newPostCategsArray = postCategsArray.map((catID) => {
            const categObject = categories.find((category) => category.id === catID )
            return categObject ? categObject.name : "category not found"
        })

        return {
            author: post.acf.autor ? post.acf.autor : "Autor XY",
            perex: stripHTMLTags(post.excerpt.rendered),
            id: post.id,
            image: getImage(post),
            title: post.title.rendered,
            genre: newPostCategsArray.join(),
        }
    })

    return updatedPosts
}

// images na vyzkoušení
// https://www.casopiskabinet.sk/wp-content/uploads/2024/12/gkg-13-300x300.jpg
// https://www.casopiskabinet.sk/wp-content/uploads/2024/12/Alexander-Eckerdt-Dvor-1961-212x300.jpg
// https://www.casopiskabinet.sk/2024/11/dotykat-sa-trhlin/8-nadoba-iv-oil-on-canvas-120x150-cm-2024-op-tien.jpg
// https://www.casopiskabinet.sk/wp-content/uploads/2024/04/katolík-201x300.jpg
// https://www.casopiskabinet.sk/wp-content/uploads/2022/11/Na-balkone-1963-219x300.jpg