import styles from './main.module.css';
import LatestNews from '../../LatestNews/LatestNews';
import NewsByFilters from '../../NewsByFilters/NewsByFilters';

const Main = () => {

    return (
        <main className={styles.main}>
            <LatestNews />
            <NewsByFilters />
            {/* news = { [{}, {}, {}, ....] } */}
        </main>
    )
}

export default Main;