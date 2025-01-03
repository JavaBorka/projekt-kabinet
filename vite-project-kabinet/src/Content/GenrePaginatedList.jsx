import "./paginated.style.css"
import { CardPreview } from "./CardPreview.jsx"
import { useState } from "react";
import { useEffect } from "react";
import { PaginationNav } from "./PaginationNav.jsx";
import { ITEMS_PER_PAGE } from "../constants/itemsPerPage.js";
import { WP_API_ITEMS_PER_PAGE } from "../constants/itemsPerPage.js";
import { getPostsPreviewWithCategoryNameGenre } from "../constants/getPostsPreviewGenre.js";

export const GenrePaginatedList = ({genre}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    getPostsPreviewWithCategoryNameGenre(WP_API_ITEMS_PER_PAGE, genre)

    useEffect(() => {
        getPostsPreviewWithCategoryNameGenre(WP_API_ITEMS_PER_PAGE, genre).then((data) => {
            setItems(data)
            const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)
            setTotalPages(totalPages)
        })
    }, [])

    return (
        <>
            <section className="card__container">
                {items
                    .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
                    .map((item) => (
                    <CardPreview key={item.id} id={item.id} genre={item.genre} title={item.title} author={item.author} content={item.perex} image={item.image}/>
                ))}
            </section>

            <PaginationNav currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
        </>
    )
  }