import { useState } from "react";

const useFilters = (initialFilters) => {

    const [filters, setFilters] = useState(initialFilters);

    const changeFilter = (key, value) => {
        setFilters(prevState => {
            return { ...prevState, [key]: value }
        })
    };

    return { filters, changeFilter }
}

export default useFilters;