import Pagination from './../Pagination/Pagination';
// import { TOTAL_PAGES } from '../../constants/constants';

const PaginationWrapper = ({ top, bottom, children, ...paginationProps }) => {

    return (
        <>
            {top && <Pagination {...paginationProps} />}
            {children}
            {bottom && <Pagination {...paginationProps} />}
        </>
    )
}

export default PaginationWrapper