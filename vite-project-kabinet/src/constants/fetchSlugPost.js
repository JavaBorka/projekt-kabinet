import { BASE_API_URL } from "./WPbaseAPI.constants";

export const fetchSlugPost = async (slug) => {

    const reqSlugPost = await fetch(`${BASE_API_URL}/posts?&slug=${slug}`)
    const slugPost = await reqSlugPost.json()
    
    return slugPost
}