import { BASE_API_URL } from "./WPbaseAPI.constants.js";
import { WP_CAT_ID_PROSE, WP_CAT_ID_POEM, WP_CAT_ID_DIARY, WP_CAT_ID_INTERVIEW, WP_CAT_ID_REVIEW } from "./WPcategories.constants.js";

export const fetchTextGenrePostsMob = async (perPage) => {

    const reqPosts = await fetch(`${BASE_API_URL}/posts?categories=${WP_CAT_ID_PROSE},${WP_CAT_ID_POEM},${WP_CAT_ID_DIARY},${WP_CAT_ID_INTERVIEW},${WP_CAT_ID_REVIEW}&per_page=${perPage}&page=1`)
    const totalRecords = parseInt(reqPosts.headers.get("X-WP-Total"), 10);
    const posts = await reqPosts.json()

    return {totalRecords, posts}

}