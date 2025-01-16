import { fetchTextGenrePosts } from "./fetchTextGenrePosts.js";
import { fetchGenreCategories } from "./fetchGenreCategories.js";
import { getPostsWithGenreName } from "./getPostsWithGenreName.js";
import { fetchGenreIdPosts } from "./fetchGenreIdPosts.js";

export const getPostsPreviewGenre = async (catId, perPage, page, setTotalPages) => {

    if (catId === "texty") {

        const {totalPages, posts} = await fetchTextGenrePosts(perPage, page)
        setTotalPages(totalPages)
    
        const categories = await fetchGenreCategories()
        const postsWithCategoryName = getPostsWithGenreName(posts, categories)

        return postsWithCategoryName
    }

    else {

        const {totalPages, posts} = await fetchGenreIdPosts(catId, perPage, page)
        setTotalPages(totalPages)

        const categories = await fetchGenreCategories()
        const postsWithCategoryName = getPostsWithGenreName(posts, categories)

        return postsWithCategoryName
    }
}