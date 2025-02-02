import { BASE_API_URL } from "./WPbaseAPI.constants"
import { key } from "./getTimestampKey"

export const fetchPosts = async (perPage, page) => {

    const reqPosts = await fetch(`${BASE_API_URL}/posts/?_embed&per_page=${perPage}&page=${page}&key=${key}`)
    const totalPages = parseInt(reqPosts.headers.get("X-WP-TotalPages"), 10)
    const posts = await reqPosts.json()

    return {totalPages, posts}
}