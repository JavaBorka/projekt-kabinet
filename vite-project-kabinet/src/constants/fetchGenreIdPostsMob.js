import { BASE_API_URL } from "./WPbaseAPI.constants.js";

export const fetchGenreIdPostsMob = async (catId, perPage) => {

    const reqPosts = await fetch(`${BASE_API_URL}/posts/?_embed&categories=${catId}&per_page=${perPage}&page=1`)
    const totalRecords = parseInt(reqPosts.headers.get("X-WP-Total"), 10)
    const posts = await reqPosts.json()

    return {totalRecords, posts}
}