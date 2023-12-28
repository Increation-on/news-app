import styles from './newsList.module.css';
import NewsItem from './../NewsItem/NewsItem';

const NewsList = ({ news }) => {

    // news = [{}, {}, {}, ...]

    return (
        <ul className={styles.list}>
            {news.map((item) => (
                <NewsItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default NewsList;