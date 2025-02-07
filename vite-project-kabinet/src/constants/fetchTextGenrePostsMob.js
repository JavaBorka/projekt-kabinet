import { BASE_API_URL } from "./WPbaseAPI.constants.js";
import { WP_CAT_ID_PROSE, WP_CAT_ID_POEM, WP_CAT_ID_DIARY, WP_CAT_ID_INTERVIEW, WP_CAT_ID_REVIEW, WP_CAT_ID_CRITICISM } from "./WPcategories.constants.js";
import { ts } from "./getTimestamp.js";

export const fetchTextGenrePostsMob = async (perPage) => {

    const reqPosts = await fetch(`${BASE_API_URL}/posts/?_embed&categories=${WP_CAT_ID_PROSE},${WP_CAT_ID_POEM},${WP_CAT_ID_DIARY},${WP_CAT_ID_INTERVIEW},${WP_CAT_ID_REVIEW},${WP_CAT_ID_CRITICISM}&per_page=${perPage}&page=1&${ts()}`)
    const totalRecords = parseInt(reqPosts.headers.get("X-WP-Total"), 10);
    const posts = await reqPosts.json()

    return {totalRecords, posts}
}