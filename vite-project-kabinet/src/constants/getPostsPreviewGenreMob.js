import { fetchGenreCategories } from "./fetchGenreCategories.js";
import { fetchTextGenrePostsMob } from "./fetchTextGenrePostsMob.js";
import { fetchGenreIdPostsMob } from "./fetchGenreIdPostsMob.js";
import { getPostsWithGenreName } from "./getPostsWithGenreName.js";

export const getPostsPreviewGenreMob = async (catId, perPage, setTotalRecords) => {

    if (catId === "texty") {

        const {posts, totalRecords} = await fetchTextGenrePostsMob(perPage)
        setTotalRecords(totalRecords)

        const categories = await fetchGenreCategories()
        const postsWithCategoryName = getPostsWithGenreName(posts, categories)

        return postsWithCategoryName
    }

    else {

        const {totalRecords, posts} = await fetchGenreIdPostsMob(catId, perPage)
        setTotalRecords(totalRecords)

        const categories = await fetchGenreCategories()
        const postsWithCategoryName = getPostsWithGenreName(posts, categories)

        return postsWithCategoryName
    }
}