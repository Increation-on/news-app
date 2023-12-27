import { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import styles from './main.module.css';
import { getNews } from './../../../api/apiNews';
import NewsList from './../../NewsList/NewsList';
import Skeleton from '../../Skeleton/Skeleton';

const Main = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true);
                const response = await getNews();
                // response = [{}, {}, {},{}...]
                setNews(response);
                setIsLoading(false);
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews();
    }, []);


    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? <Banner item={news[0]} /> : <Skeleton count={1} type={'banner'} />}
            {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type={'item'} />}

            {/* news = { [{}, {}, {}, ....] } */}
        </main>
    )
}

export default Main;