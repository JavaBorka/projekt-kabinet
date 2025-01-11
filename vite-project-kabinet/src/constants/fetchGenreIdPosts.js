import { BASE_API_URL } from "./WPbaseAPI.constants"

export const fetchGenreIdPosts = async (catId, perPage, page) => {

    const reqPosts = await fetch(`${BASE_API_URL}/posts?categories=${catId}&per_page=${perPage}&page=${page}`)
    const totalPages = parseInt(reqPosts.headers.get("X-WP-TotalPages"), 10)
    const posts = await reqPosts.json()

    return {totalPages, posts}
}