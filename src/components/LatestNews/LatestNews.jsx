import BannerList from '../BannersList/BannersList';
import styles from './latestNews.module.css';
import useFetch from '../../helpers/hooks/useFetch';
import { getLatestNews } from '../../api/apiNews';


const LatestNews = () => {

    const { data, isLoading } = useFetch(getLatestNews);

    return (
        <section className={styles.section}>

            <BannerList banners={data && data.news} isLoading={isLoading} />

        </section>
    )
}

export default LatestNews;