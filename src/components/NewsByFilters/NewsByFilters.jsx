import styles from './newsByFilters.module.css';
import NewsList from './../NewsList/NewsList';
import { TOTAL_PAGES, PAGE_SIZE } from '../../constants/constants';
import Filters from '../Filters/Filters';
import useFilters from '../../helpers/hooks/useFilters';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import useFetch from '../../helpers/hooks/useFetch';
import { getNews } from '../../api/apiNews';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';


const NewsByFilters = () => {


    const { filters, changeFilter } = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: ""
    });

    const debouncedKeywords = useDebounce(filters.keywords, 1000);

    const { data, isLoading } = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords
    });

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

            <PaginationWrapper
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handleCurrentPageClick={handleCurrentPageClick}
                currentPage={filters.page_number}
                top={true}
                bottom={true}
            >
                <NewsList isLoading={isLoading} news={data?.news} />
            </PaginationWrapper>

        </section>
    )
}

export default NewsByFilters