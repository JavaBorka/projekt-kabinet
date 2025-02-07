import { BASE_API_URL } from "./WPbaseAPI.constants"
import { ts } from "./getTimestamp"

export const fetchPosts = async (perPage, page) => {

    const reqPosts = await fetch(`${BASE_API_URL}/posts/?_embed&per_page=${perPage}&page=${page}&${ts()}`)
    const totalPages = parseInt(reqPosts.headers.get("X-WP-TotalPages"), 10)
    const posts = await reqPosts.json()

    return {totalPages, posts}
}