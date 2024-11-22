import "./paginated.style.css"
import { Card } from "./Card.jsx"
import { useState } from "react";

export const LoadedList = ({items, itemsPerPage}) => {
    const [visibleCount, setVisibleCount] = useState(itemsPerPage)

    return (
        <>
            <section className="card__container">
                {items
                    .slice(0, visibleCount)
                    .map((item) => (
                    <Card key={item.id} genre={item.genre} title={item.title} author={item.author} content={item.content} image={item.image}/>
                ))}
            </section>
            
            {visibleCount < items.length && (
                <div className="pages_mob">
                    <button 
                        className="button-mob"
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