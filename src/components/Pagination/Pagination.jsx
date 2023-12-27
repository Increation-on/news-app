import styles from './pagination.module.css';

const Pagination = ({ totalPages, handleNextPage, handlePrevPage, handleCurrentPageClick, currentPage }) => {
    return (
        <div className={styles.pagination}>
            <button className={styles.arrow} onClick={handlePrevPage}  disabled={currentPage <= 1}>{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={ index + 1 !== currentPage ? styles['page-number'] : styles['page-number-disabled']}
                        onClick={() => { handleCurrentPageClick(index + 1) }}
                        disabled={index + 1 === currentPage}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <button className={styles.arrow} onClick={handleNextPage}  disabled={currentPage >= totalPages}>{'>'}</button>
        </div>
    )
}

export default Pagination