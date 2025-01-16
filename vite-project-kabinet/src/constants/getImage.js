export const getImage = (post) => {
    const wpArray = post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"] : []

    if (wpArray.length > 0) {
        const image = wpArray[0]?.media_details?.sizes?.medium?.source_url;
        return image
    }
    else {
        return ""
    }
};