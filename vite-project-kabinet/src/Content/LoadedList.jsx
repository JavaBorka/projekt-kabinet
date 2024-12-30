import "./paginated.style.css"
import { CardPreview } from "./CardPreview.jsx"
import { useState } from "react";
import { useEffect } from "react";
import { getPostsPreviewWithCategoryName } from "../constants/getPostsPreviewMobile.js";

export const LoadedList = ({itemsPerPage}) => {

    const [items, setItems] = useState([])
    const [totalRecords, setTotalRecords] = useState(0)
    const [visibleCount, setVisibleCount] = useState(itemsPerPage)

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
                            setVisibleCount(prev => prev + itemsPerPage)
                        }}
                    >
                        Ďalšie články
                    </button>
                </div>
            )}
        </>
    )
  }