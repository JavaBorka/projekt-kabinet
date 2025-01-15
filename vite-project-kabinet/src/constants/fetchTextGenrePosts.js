import { BASE_API_URL } from "./WPbaseAPI.constants.js";
import { WP_CAT_ID_PROSE, WP_CAT_ID_POEM, WP_CAT_ID_DIARY, WP_CAT_ID_INTERVIEW, WP_CAT_ID_REVIEW } from "./WPcategories.constants.js";

export const fetchTextGenrePosts = async (perPage, page) => {

    const reqPosts = await fetch(`${BASE_API_URL}/posts/?_embed&categories=${WP_CAT_ID_PROSE},${WP_CAT_ID_POEM},${WP_CAT_ID_DIARY},${WP_CAT_ID_INTERVIEW},${WP_CAT_ID_REVIEW}&per_page=${perPage}&page=${page}`)
    const totalPages = parseInt(reqPosts.headers.get("X-WP-TotalPages"), 10)
    const posts = await reqPosts.json()

    return {totalPages, posts}
}