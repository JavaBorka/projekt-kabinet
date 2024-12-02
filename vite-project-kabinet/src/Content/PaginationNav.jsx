import arrowRight from "./assets/arrow_right.svg"
import arrowLeft from "./assets/arrow_left.svg"

export const PaginationNav = ({currentPage, totalPages, handlePageChange}) => {

    return (
        <div className="pages_pc">
            {currentPage > 1 &&
                <button
                    className="button-pc"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <img src={arrowLeft} alt="šípka vľavo"/>
                </button>
            }

            <ul className="pages__numbers">
                <li>
                    <button className="button-pc">{currentPage}</button>
                </li>
            </ul>

            {currentPage < totalPages && 
                <button
                    className="button-pc"
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    <img src={arrowRight} alt="šípka vpravo"/>
                </button>
            }
        </div>
    )
}