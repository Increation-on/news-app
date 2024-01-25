import styles from './main.module.css';
import { getCategories, getNews } from './../../../api/apiNews';
import Pagination from './../../Pagination/Pagination';
import Categories from '../../Categories/Categories';
import Search from '../../Search/Search';
import { useDebounce } from './../../../helpers/hooks/useDebounce';

import { TOTAL_PAGES, PAGE_SIZE } from '../../../constants/constants';
import BannerWithSkeleton from '../../Banner/Banner';
import NewsListWithSkeleton from './../../NewsList/NewsList';
import useFetch from './../../../helpers/hooks/useFetch';
import useFilters from './../../../helpers/hooks/useFilters';

const Main = () => {


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

    const { data: categoriesData } = useFetch(getCategories);


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
        <main className={styles.main}>

            {
                categoriesData ? <Categories
                    categories={categoriesData.categories}
                    selectedCategory={filters.category}
                    setSelectedCategory={(category) => changeFilter('category', category)}
                /> : null
            }


            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />

            <BannerWithSkeleton isLoading={isLoading} item={data && data.news && data.news[0]} />

            <Pagination
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handleCurrentPageClick={handleCurrentPageClick}
                currentPage={filters.page_number}
            />

            <NewsListWithSkeleton isLoading={isLoading} news={data?.news} />

            <Pagination
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handleCurrentPageClick={handleCurrentPageClick}
                currentPage={filters.page_number}
            />


            {/* news = { [{}, {}, {}, ....] } */}
        </main>
    )
}

export default Main;