import "./paginated.style.css"
import { Card } from "./Card.jsx"
import { useState } from "react";
import { PaginationNav } from "./PaginationNav.jsx";

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
                {items
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map((item) => (
                    <Card key={item.id} genre={item.genre} title={item.title} author={item.author} content={item.content} image={item.image}/>
                ))}
            </section>

            <PaginationNav currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
        </>
    )
  }