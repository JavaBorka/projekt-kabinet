export const getImageSrc = (post) => {
    const arrayEmbedded = post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"] : []

    if (arrayEmbedded.length > 0) {
        const image = arrayEmbedded[0]?.media_details?.sizes?.medium?.source_url;
        return image
    }
    else {
        return null;
    }
};