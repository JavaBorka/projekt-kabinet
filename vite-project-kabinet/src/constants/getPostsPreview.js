import { fetchPosts } from "./fetchPosts.js";
import { fetchGenreCategories } from "./fetchGenreCategories.js";
import { getPostsWithGenreName } from "./getPostsWithGenreName.js";

export const getPostsPreview = async (perPage, page, setTotalPages) => {

    const {totalPages, posts} = await fetchPosts(perPage, page)
    setTotalPages(totalPages)

    const categories = await fetchGenreCategories()
    const postsWithCategoryName = getPostsWithGenreName(posts, categories)

    return postsWithCategoryName

}