import { BASE_API_URL } from "./WPbaseAPI.constants"

// export const fetchPosts = async (perPage, page) => {

//     const APIreq = `${BASE_API_URL}/posts/?_embed&per_page=${perPage}&page=${page}`

//     const newHeaders = new Headers()
//     newHeaders.append('pragma', 'no-cache');
//     newHeaders.append('cache-control', 'no-cache');

//     const myInit = {
//         method: "GET",
//         headers: newHeaders
//     }

//     const reqPosts = await fetch(APIreq, myInit)
//     const totalPages = parseInt(reqPosts.headers.get("X-WP-TotalPages"), 10)
//     const posts = await reqPosts.json()

//     return {totalPages, posts}
// }

export const fetchPosts = async (perPage, page) => {

    const reqPosts = await fetch(`${BASE_API_URL}/posts/?_embed&per_page=${perPage}&page=${page}`)
    const totalPages = parseInt(reqPosts.headers.get("X-WP-TotalPages"), 10)
    const posts = await reqPosts.json()

    return {totalPages, posts}
}