import styles from './newsList.module.css';
import NewsItem from './../NewsItem/NewsItem';
import withSkeleton from './../../helpers/HOCs/withSkeleton';

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

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);

export default NewsListWithSkeleton;