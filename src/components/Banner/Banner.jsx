import styles from './banner.module.css';
import { formatTimeAgo } from './../../helpers/formatTimeAgo';

const Banner = ({ item }) => {

    // item = {banner : '', image: "", ...} , т.к item = {news[0]}

    return (
        <div className={styles.banner}>
            <div className={styles['image-wrapper']}>
                {item ? <img src={item.image} alt="banner_image" className={styles.image} /> : null}
            </div>

            <div className={styles.info}>
                <h3 className={styles.title}>
                    {item.title}
                </h3>
                <p className={styles.published}>
                    {formatTimeAgo(item.published)} by {item.author}
                </p>
            </div>
        </div>
    )
};


export default Banner;