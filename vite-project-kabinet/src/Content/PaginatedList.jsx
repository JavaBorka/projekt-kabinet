import "./paginated.style.css"
import { CardPreview } from "./CardPreview.jsx"
import { useState } from "react";
import { useEffect } from "react";
import { PaginationNav } from "./PaginationNav.jsx";
import { BASE_API_URL } from "../constants/baseApiUrl.js";
import { stripHTMLTags } from "../utils/stripHtmlTags.js";
import { getPostsPreviewWithCategoryName } from "../constants/getPostsPreview.js";

export const PaginatedList = ({itemsPerPage}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)
    const [items, setItems] = useState([])

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    getPostsPreviewWithCategoryName(itemsPerPage, currentPage, setTotalPages)

    useEffect(() => {
        getPostsPreviewWithCategoryName(itemsPerPage, currentPage, setTotalPages).then((data) => {
            setItems(data)
        })
    }, [currentPage])

    return (
        <>
            <section className="card__container">
                {items
                    .map((item) => (
                    <CardPreview key={item.id} id={item.id} genre={item.genre} title={item.title} author={item.author} content={item.perex} image={item.image}/>
                ))}
            </section>

            <PaginationNav currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
        </>
    )
  }