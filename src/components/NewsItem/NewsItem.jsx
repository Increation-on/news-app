import styles from './newsItem.module.css';
import { formatTimeAgo } from './../../helpers/formatTimeAgo';

const NewsItem = ({ item }) => {
    return (
        <li className={styles.item}>
            <div className={styles['image-wrapper']} style={{backgroundImage: `url(${item.image})`}}>

            </div>
            <div className={styles.info}>
                <h3 className={styles.item}>
                    {item.title}
                </h3>
                <p className={styles.extra}>
                    {formatTimeAgo(item.published)} by {item.author}
                </p>
            </div>
        </li>
    )
}

export default NewsItem;