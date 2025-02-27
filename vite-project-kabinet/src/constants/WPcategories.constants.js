// texty nemají ID (nejsou kategorií wordpressu)

export const WP_CAT_ID_ESSAY = 4
export const CAT_ID_TEXTS = "texty"
export const WP_CAT_ID_PROSE = 15
export const WP_CAT_ID_POEM = 11
export const WP_CAT_ID_DIARY = 12
export const WP_CAT_ID_INTERVIEW = 14
export const WP_CAT_ID_REVIEW = 13
export const WP_CAT_ID_CRITICISM = 3

export const genresID = {
    "proza": 15,
    "basne": 11,
    "z-diara": 12,
    "rozhovor": 14,
    "review": 13,
    "kritika": 3,
}

export const genresName = {
    4: "eseje",
    3: "kritika",
    1: "nezaradene",
    11: "basne",
    10: "pohlad",
    15: "proza",
    13: "review",
    14: "rozhovor",
    12: "z-diara"
}

export const newGenreSlug = {
    esej: "eseje",
    kritika: "kritika",
    poezia: "basne",
    proza: "proza",
    zdiara: "z-diara",
    vrozhovore: "rozhovor",
    review: "review"
}