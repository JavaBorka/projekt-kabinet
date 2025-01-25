import { BASE_API_URL } from "./WPbaseAPI.constants";
import { key } from "./getTimestampKey";

export const fetchGenreCategories = async () => {

    const reqCategories = await fetch(`${BASE_API_URL}/categories?_fields=id,name&key=${key}`)
    const categories = await reqCategories.json()
    return categories
}