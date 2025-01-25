import { BASE_API_URL } from "./WPbaseAPI.constants.js";
import { key } from "./getTimestampKey.js";

export const fetchGenreIdPostsMob = async (catId, perPage) => {

    const reqPosts = await fetch(`${BASE_API_URL}/posts/?_embed&categories=${catId}&per_page=${perPage}&page=1&key=${key}`)
    const totalRecords = parseInt(reqPosts.headers.get("X-WP-Total"), 10)
    const posts = await reqPosts.json()

    return {totalRecords, posts}
}