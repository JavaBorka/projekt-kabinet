import "./paginated.style.css"
import { CardPreview } from "./CardPreview.jsx"
import { useState } from "react";
import { useEffect } from "react";
import { PaginationNav } from "./PaginationNav.jsx";
import { getPostsWithCategoryName } from "../constants/fetchUpdatedPosts"

export const PaginatedList = ({itemsPerPage}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([])

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    // fetch(`https://casopiskabinet.sk/wp-json/wp/v2/posts?per_page=6&page=1`)
    useEffect(() => {
        getPostsWithCategoryName().then((data) => {
            setItems(data)
        })
    }, [])

    return (
        <>
            <section className="card__container">
                {items
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map((item) => (
                    <CardPreview key={item.id} id={item.id} genre={item.genre} title={item.title} author={item.author} content={item.perex} image={item.image}/>
                ))}
            </section>

            <PaginationNav currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
        </>
    )
  }