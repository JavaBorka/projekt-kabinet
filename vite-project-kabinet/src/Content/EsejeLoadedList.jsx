import "./paginated.style.css"
import { CardPreview } from "./CardPreview.jsx"
import { useState } from "react";
import { useEffect } from "react";
import { getPostsPreviewWithCategoryName } from "../constants/getPostsPreviewMobile.js";
import { ITEMS_PER_PAGE_MOB } from "../constants/itemsPerPageMob.js";

// todo: Prozatím funkce EsejeLoadedList = Loaded List. Je potřeba upravit funkci tak, aby vracela jenom eseje.
export const EsejeLoadedList = () => {

    const [items, setItems] = useState([])
    const [totalRecords, setTotalRecords] = useState(0)
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE_MOB)

    getPostsPreviewWithCategoryName(visibleCount, setTotalRecords)

    useEffect(() => {
        getPostsPreviewWithCategoryName(visibleCount, setTotalRecords).then((data) => {
            setItems(data)
        })
    }, [visibleCount])

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