import "./paginated.style.css"
import { CardPreview } from "./CardPreview.jsx"
import { useState } from "react";
import { useEffect } from "react";
import { getPostsPreviewWithCategoryNameGenre } from "../constants/getPostsPreviewGenre.js";
import { ITEMS_PER_PAGE_MOB } from "../constants/itemsPerPageMob.js";
import { WP_API_ITEMS_PER_PAGE } from "../constants/itemsPerPage.js";

export const GenreLoadedList = ({genre}) => {

    const [items, setItems] = useState([])
    const [totalRecords, setTotalRecords] = useState(0)
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE_MOB)

    getPostsPreviewWithCategoryNameGenre(WP_API_ITEMS_PER_PAGE, genre)
    useEffect(() => {
        getPostsPreviewWithCategoryNameGenre(WP_API_ITEMS_PER_PAGE, genre).then((data) => {
            setItems(data)
            setTotalRecords(data.length)
        })
    }, [])

    return (
        <>
            <section className="card__container">
                {items
                    .slice(0, visibleCount)
                    .map((item) => (
                    <CardPreview key={item.id} id={item.id} genre={item.genre} title={item.title} author={item.author} content={item.perex} image={item.image}/>

                ))}
            </section>

            {visibleCount < totalRecords && (
                <div className="pages_mob">
                    <button 
                        className="btn btn-mob"
                        onClick={() => {
                            setVisibleCount(prev => prev + ITEMS_PER_PAGE_MOB)
                        }}
                    >
                        Ďalšie články
                    </button>
                </div>
            )}
        </>
    )
  }