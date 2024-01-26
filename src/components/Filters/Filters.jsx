import useFetch from "../../helpers/hooks/useFetch";
import { getCategories } from "../../api/apiNews";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";

const Filters = ({filters, changeFilter}) => {

    const { data: categoriesData } = useFetch(getCategories);

    return (
        <>
            {
                categoriesData ? <Categories
                    categories={categoriesData.categories}
                    selectedCategory={filters.category}
                    setSelectedCategory={(category) => changeFilter('category', category)}
                /> : null
            }

            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />
        </>
    )
}

export default Filters;
