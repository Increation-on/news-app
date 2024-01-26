import styles from './newsByFilters.module.css';
import Pagination from './../Pagination/Pagination';
import NewsList from './../NewsList/NewsList';
import { TOTAL_PAGES, PAGE_SIZE } from '../../constants/constants';
import Filters from '../Filters/Filters';


const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {

    const handleNextPage = () => {
        if (filters.page_number < PAGE_SIZE) {
            changeFilter('page_number', filters.page_number + 1);
        }
    };

    const handlePrevPage = () => {
        if (filters.page_number > 1) {
            changeFilter('page_number', filters.page_number - 1);
        }
    }

    const handleCurrentPageClick = (page) => {
        changeFilter('page_number', page);
    }
    return (
        <section className={styles.section}>

            <Filters changeFilter={changeFilter} filters={filters} />

            <Pagination
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handleCurrentPageClick={handleCurrentPageClick}
                currentPage={filters.page_number}
            />

            <NewsList isLoading={isLoading} news={news} />

            <Pagination
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handleCurrentPageClick={handleCurrentPageClick}
                currentPage={filters.page_number}
            />
        </section>
    )
}

export default NewsByFilters