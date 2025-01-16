import { fetchPostsMob } from "./fetchPostsMob.js"
import { fetchGenreCategories } from "./fetchGenreCategories.js"
import { getPostsWithGenreName } from "./getPostsWithGenreName.js"

export const getPostsPreviewMob = async (perPage, setTotalRecords) => {

    const {totalRecords, posts} = await fetchPostsMob(perPage)
    setTotalRecords(totalRecords)

    const categories = await fetchGenreCategories()
    const postsWithCategoryName = getPostsWithGenreName(posts, categories)

    return postsWithCategoryName
}