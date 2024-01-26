import styles from './main.module.css';
import { getNews } from './../../../api/apiNews';
import { useDebounce } from './../../../helpers/hooks/useDebounce';
import { PAGE_SIZE } from '../../../constants/constants';
import useFetch from './../../../helpers/hooks/useFetch';
import useFilters from './../../../helpers/hooks/useFilters';
import LatestNews from '../../LatestNews/LatestNews';
import NewsByFilters from '../../NewsByFilters/NewsByFilters';

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


    return (
        <main className={styles.main}>

            <LatestNews isLoading={isLoading} banners={data && data.news} />

            <NewsByFilters changeFilter={changeFilter} filters={filters} isLoading={isLoading} news={data?.news} />

            {/* news = { [{}, {}, {}, ....] } */}
        </main>
    )
}

export default Main;