import "./paginated.style.css"
import { CardPreview } from "./CardPreview.jsx"
import { useState } from "react";
import { useEffect } from "react";
import { PaginationNav } from "./PaginationNav.jsx";
import { BASE_API_URL } from "../constants/baseApiUrl.js";

export const PaginatedList = ({itemsPerPage}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)
    const [items, setItems] = useState([])

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const getPostsWithCategoryName = async (perPage, page) => {

        const reqPosts = await fetch(`${BASE_API_URL}/posts?per_page=${perPage}&page=${page}`)
        const totalPages = reqPosts.headers.get("X-WP-TotalPages");
        setTotalPages(totalPages)
        const posts = await reqPosts.json()
    
        const reqCategories = await fetch(`${BASE_API_URL}/categories?_fields=id,name`)
        const categories = await reqCategories.json()
    
        //chcem získať pole objektov, kde bude každý objekt obsahovať aj konkrétny názov kategórie
        
        const updatedPosts = posts.map((post) => {
            const postCategsArray = post.categories
            const newPostCategsArray = postCategsArray.map((catID) => {
                const categObject = categories.find((category) => category.id === catID )
                return categObject ? categObject.name : "category not found"
            })
    
            // Aby program správne fungoval, každý článok musí obsahovať vždy práve jednu kategóriu.
            // Kabinet má aktuálne pár článkov takých, kde sú pridelené 2 kategórie
    
            // todo: Dá sa nastaviť WP tak, aby uživateľ mohol zakliknúť vždy len jednu kategóriu ?
            // Nedá. Muselo by se vytvořit nové pole, které by fungovalo stejně jen s tímhle omezením. Znamenalo by to, že by se musely upravit hodnoty pro všechny články.

            // todo: pridať žánre vo WP
            // todo: nastaviť WP tak, aby šlo pridávať fotky
            // todo: nastaviť WP tak, aby mal autor svoju vlastnú kolonku

            const stripHtmlTags = (html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                return doc.body.textContent || "";
            };
    
            return {
                author: "Název autora",
                perex: stripHtmlTags(post.excerpt.rendered),
                id: post.id,
                image: "",
                title: post.title.rendered,
                genre: newPostCategsArray.join(),                
            }
        })
    
        return updatedPosts
    }

    useEffect(() => {
        getPostsWithCategoryName(itemsPerPage, currentPage).then((data) => {
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