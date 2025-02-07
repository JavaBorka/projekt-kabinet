import { BASE_API_URL } from "./WPbaseAPI.constants";
import { ts } from "./getTimestamp";

export const fetchGenreCategories = async () => {

    const reqCategories = await fetch(`${BASE_API_URL}/categories?_fields=id,name&${ts()}`)
    const categories = await reqCategories.json()
    return categories
}