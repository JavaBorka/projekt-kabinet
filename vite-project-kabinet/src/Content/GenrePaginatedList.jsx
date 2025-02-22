import "./paginated.style.css"
import { CardPreview } from "./CardPreview.jsx"
import { useState } from "react";
import { useEffect } from "react";
import { PaginationNav } from "./PaginationNav.jsx";
import { ITEMS_PER_PAGE } from "../constants/itemsPerPage.constants.js";
import { getPostsPreviewGenre } from "../constants/getPostsPreviewGenre.js";
import { useCardAnimations } from "../constants/useCardAnimations.js";
import { useSearchParams } from "react-router";

export const GenrePaginatedList = ({catId}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams();

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    useEffect(() => {
        getPostsPreviewGenre(catId, ITEMS_PER_PAGE, currentPage, setTotalPages).then((data) => {
            setItems(data)
        })
    }, [currentPage])

    // Při prvním načtení komponenty synchronizujeme currentPage s URL
    useEffect(() => {
        const stranka = searchParams.get('stranka');
        if (stranka) {
            setCurrentPage(Number(stranka));
        }
        }, [searchParams]);

    // Pokaždé, když se změní currentPage, aktualizujeme query parametry
    useEffect(() => {
        setSearchParams({ stranka: currentPage });
    }, [currentPage, setSearchParams]);

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

            <PaginationNav currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
        </>
    )
  }