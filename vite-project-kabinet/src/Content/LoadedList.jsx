import "./paginated.style.css"
import { CardPreview } from "./CardPreview.jsx"
import { useState } from "react";
import { useEffect } from "react";
import { getPostsPreviewMob } from "../constants/getPostsPreviewMob.js";
import { ITEMS_PER_PAGE_MOB } from "../constants/itemsPerPage.constants.js";
import { useCardAnimations } from "../constants/useCardAnimations.js";

export const LoadedList = () => {

    const [items, setItems] = useState([])
    const [totalRecords, setTotalRecords] = useState(0)
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE_MOB)

    useEffect(() => {
        getPostsPreviewMob(visibleCount, setTotalRecords).then((data) => {
            setItems(data)
        })
    }, [visibleCount])

    // Vytvářím vlastní hook
    useCardAnimations({items})

    return (
        <>
            <section className="card__container">
                {items
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