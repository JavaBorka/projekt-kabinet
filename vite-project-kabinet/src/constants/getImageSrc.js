export const getImageSrc = (post) => {
    const arrayEmbedded = post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"] : []

    if (arrayEmbedded.length > 0) {
        const imageLarge = arrayEmbedded[0]?.media_details?.sizes?.large?.source_url;
        const imageFull = arrayEmbedded[0]?.media_details?.sizes?.full?.source_url;
        return imageLarge ? imageLarge : imageFull
    }
    else {
        return null;
    }
};