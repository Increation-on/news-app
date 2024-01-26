import styles from './bannersList.module.css';
import withSkeleton from '../../helpers/HOCs/withSkeleton';
import Banner from '../Banner/Banner';

const BannersList = ({ banners }) => {
    return (
        <ul className={styles.banners}>
            {banners.map((banner) => (
                <Banner key={banner.id} item={banner} />
            ))}
        </ul>
    )
}



const BannerListWithSkeleton = withSkeleton(BannersList, 'banner', 12, 'row');

export default BannerListWithSkeleton;