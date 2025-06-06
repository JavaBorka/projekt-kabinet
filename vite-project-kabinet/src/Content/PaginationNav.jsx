import arrowRight from "./assets/arrow_right.svg"
import arrowLeft from "./assets/arrow_left.svg"
import "./paginated.style.css"

export const PaginationNav = ({currentPage, totalPages, handlePageChange}) => {

    return (
        <div className="pages__container">
            <div className="pages_pc">
                {currentPage >= 1 &&
                    <button
                        className="btn btn-desktop btn-left"
                        onClick={() => {
                            handlePageChange(currentPage - 1);
                            document.getElementById('top').focus()
                        }}
                        disabled={currentPage === 1}
                    >
                        <img src={arrowLeft} alt="šípka vľavo"/>
                    </button>
                }

                <ul className="pages__numbers">
                    <li>
                        <button className="btn btn-desktop btn-number">{currentPage}</button>
                    </li>
                </ul>

                {currentPage <= totalPages && 
                    <button
                        className="btn btn-desktop btn-right"
                        onClick={() => {
                            handlePageChange(currentPage + 1);
                            document.getElementById('top').focus()
                        }}
                        disabled={currentPage === totalPages}
                    >
                        <img src={arrowRight} alt="šípka vpravo"/>
                    </button>
                }
            </div>
        </div>
    )
}