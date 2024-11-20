import "./paginated.style.css"
import { Card } from "./Card.jsx"
import { useState } from "react";
import arrowRight from "./assets/arrow_right.svg"
import arrowLeft from "./assets/arrow_left.svg"

export const PaginatedList = ({items, itemsPerPage}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <>
            <section className="card__container">
                {/* Zobrazení seznamu položek - tady namapuju komponentu <Card/> */}
                {items
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map((item) => (
                    <Card key={item.id} genre={item.genre} title={item.title} author={item.author} content={item.content} image={item.image} />
                ))}
            </section>

            {/* Ovládací prvky*/}
            <div className="pages">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <img src={arrowLeft} alt="arrow left"/>
                </button>

                <ul className="pages__numbers">
                    <li>
                        <button>{currentPage}</button>
                    </li>
                </ul>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <img src={arrowRight} alt="arrow right"/>
                </button>
            </div>
        </>
    )
  }