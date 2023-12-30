import { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import styles from './main.module.css';
import { getCategories, getNews } from './../../../api/apiNews';
import NewsList from './../../NewsList/NewsList';
import Skeleton from '../../Skeleton/Skeleton';
import Pagination from './../../Pagination/Pagination';
import Categories from '../../Categories/Categories';
import Search from '../../Search/Search';
import { useDebounce } from './../../../helpers/hooks/useDebounce';

const Main = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [keywords, setKeywords] = useState('');

    const totalPages = 10;
    const pageSize = 10;

    const debouncedKeywords = useDebounce(keywords, 1000);



    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true);
                const response = await getNews({
                    page_number: currentPage,
                    page_size: pageSize,
                    category: selectedCategory === 'all' ? null : selectedCategory,
                    keywords: debouncedKeywords
                });
                // response = [{}, {}, {},{}...]
                setNews(response);
                setIsLoading(false);
            } catch (error) {
                console.log(error)
            }
        };
        fetchNews();
    }, [currentPage, selectedCategory, debouncedKeywords]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategories();
                // response = [{}, {}, {},{}...]
                setCategories(["all", ...response]);
            } catch (error) {
                console.log(error)
            }
        };
        fetchCategories();
    }, []);


    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage => currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage => currentPage - 1);
        }
    }

    const handleCurrentPageClick = (page) => {
        setCurrentPage(page)
    }


    return (
        <main className={styles.main}>
            <Categories
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <Search keywords={keywords} setKeywords={setKeywords} />

            {news.length > 0 && !isLoading ? <Banner item={news[0]} /> : <Skeleton count={1} type={'banner'} />}

            <Pagination
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handleCurrentPageClick={handleCurrentPageClick}
                currentPage={currentPage}
            />

            {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type={'item'} />}

            <Pagination
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handleCurrentPageClick={handleCurrentPageClick}
                currentPage={currentPage}
            />


            {/* news = { [{}, {}, {}, ....] } */}
        </main>
    )
}

export default Main;