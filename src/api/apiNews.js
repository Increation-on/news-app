const BASE_URL = import.meta.env.VITE_NEWS_BASE_NEWS_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
import axios from 'axios';


export const getNews = async ({ page_number = 2, page_size = 10, category, keywords }) => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords
            }
        });
        return response.data.news;
    } catch (error) {
        console.log(error)
    }
}


export const getCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/available/categories`, {
            params: {
                apiKey: API_KEY,
            }
        });
        return response.data.categories;
    } catch (error) {
        console.log(error)
    }
}