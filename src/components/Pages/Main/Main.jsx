import { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import styles from './main.module.css';
import { getNews } from './../../../api/apiNews';
import NewsList from './../../NewsList/NewsList';

const Main = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                console.log(response); // response = [{}, {}, {},{}...]
                setNews(response);
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews();
    }, []);


    return (
        <main className={styles.main}>
            {news.length > 0 ? <Banner item={news[0]} /> : null}
            <NewsList news={news} /> {/* news = { [{}, {}, {}, ....] } */}

        </main>
    )
}

export default Main;