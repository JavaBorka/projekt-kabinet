import { BASE_API_URL } from "./WPbaseAPI.constants.js";
import { WP_CAT_ID_PROSE, WP_CAT_ID_POEM, WP_CAT_ID_DIARY, WP_CAT_ID_INTERVIEW, WP_CAT_ID_REVIEW, WP_CAT_ID_CRITICISM } from "./WPcategories.constants.js";
import { ts } from "./getTimestamp.js";

export const fetchTextGenrePosts = async (perPage, page) => {

    const reqPosts = await fetch(`${BASE_API_URL}/posts/?_embed&categories=${WP_CAT_ID_PROSE},${WP_CAT_ID_POEM},${WP_CAT_ID_DIARY},${WP_CAT_ID_INTERVIEW},${WP_CAT_ID_REVIEW},${WP_CAT_ID_CRITICISM}&per_page=${perPage}&page=${page}&${ts()}`)
    const totalPages = parseInt(reqPosts.headers.get("X-WP-TotalPages"), 10)
    const posts = await reqPosts.json()

    return {totalPages, posts}
}