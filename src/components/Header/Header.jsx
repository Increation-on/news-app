import { formatDate } from './../../helpers/formatDate';
import styles from './header.module.css'

const Header = () => {

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>News</h1>
            <p className={styles.date}>{formatDate()}</p>
        </header>
    )
}

export default Header;