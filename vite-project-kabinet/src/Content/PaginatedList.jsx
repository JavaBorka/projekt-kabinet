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

    const getPostsWithCategoryName = async () => {
        const reqPosts = await fetch(`/assets/constants/posts.json`)
        const posts = await reqPosts.json()

        const reqCategories = await fetch(`/assets/constants/categories.json`)
        const categories = await reqCategories.json()

        const postsAndCategoryName = posts.map((post) => {
            const categoryNames = post.categories.map((catId) => {
                const category = categories.find((category) => category.id === catId)
    
                return category ? category.name : "Neznámá kategorie"
            });
    
            return {
                ...post,
                categoryNames: categoryNames
            };
        });
        console.log(postsAndCategoryName)
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