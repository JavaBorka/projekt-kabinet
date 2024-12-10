import "./paginated.style.css"
import { CardPreview } from "./CardPreview.jsx"
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

    // Fetch funkce
    const getPostsWithCategoryName = async () => {
        const reqPosts = await fetch(`/assets/constants/posts.json`)
        const posts = await reqPosts.json()

        const reqCategories = await fetch(`/assets/constants/categories.json`)
        const categories = await reqCategories.json()

        //chcem získať pole objektov, kde bude každý objekt obsahovať aj konkrétny názov kategórie
        
        const updatedPosts = posts.map((post) => {
            const postCategsArray = post.categories
            const newPostCategsArray = postCategsArray.map((catID) => {
                const categObject = categories.find((category) => category.id === catID )
                return categObject ? categObject.name : "kategória sa nenašla"
            })

            // Aby program správne fungoval, každý článok musí obsahovať vždy práve jednu kategóriu.
            // Kabinet má aktuálne pár článkov takých, kde sú pridelené 2 kategórie

            // todo: Dá sa nastaviť WP tak, aby uživateľ mohol zakliknúť vždy len jednu kategóriu ?
            // todo: pridať žánre vo WP
            // todo: nastaviť WP tak, aby šlo pridávať fotky
            // todo: nastaviť WP tak, aby mal autor svoju vlastnú kolonku

            return {
                ...post,
                categoryName: newPostCategsArray.join()
            }
        })
    }
    getPostsWithCategoryName()

    return (
        <>
            <section className="card__container">
                {items
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map((item) => (
                    <CardPreview key={item.id} id={item.id} genre={item.genre} title={item.title} author={item.author} content={item.content} image={item.image}/>
                ))}
            </section>

            <PaginationNav currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
        </>
    )
  }