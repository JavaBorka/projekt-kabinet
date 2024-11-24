import "./paginated.style.css"
import { CardPreview } from "./CardPreview.jsx"
import { useState } from "react";

export const LoadedList = ({items, itemsPerPage}) => {
    const [visibleCount, setVisibleCount] = useState(itemsPerPage)

    return (
        <>
            <section className="card__container">
                {items
                    .slice(0, visibleCount)
                    .map((item) => (
                    <CardPreview key={item.id} genre={item.genre} title={item.title} author={item.author} content={item.content} image={item.image}/>
                ))}
            </section>
            
            {visibleCount < items.length && (
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