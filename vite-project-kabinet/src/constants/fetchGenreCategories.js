import { BASE_API_URL } from "./WPbaseAPI.constants";

export const fetchGenreCategories = async () => {

    const reqCategories = await fetch(`${BASE_API_URL}/categories?_fields=id,name`)
    const categories = await reqCategories.json()
    return categories
}