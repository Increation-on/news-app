import useFetch from "../../helpers/hooks/useFetch";
import { getCategories } from "../../api/apiNews";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";

const Filters = ({ filters, changeFilter }) => {

    const { data: categoriesData } = useFetch(getCategories);

    return (
        <>

            {categoriesData ?
                <Slider step={150}>
                    <Categories
                        categories={categoriesData.categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={(category) => changeFilter('category', category)}
                    />
                </Slider>
                : null
            }


            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />
        </>
    )
}

export default Filters;
