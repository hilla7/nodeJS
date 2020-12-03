import categoriesData from '../assets/data/categories.data.json';
import { ICategoryDto } from '../models/dto/category.dto.js';

export const getCategories: () => ICategoryDto[] = () => {
    return categoriesData;
}

export function getCategoriesAsync(): Promise<ICategoryDto[]> {
    const categories = getCategories();
    if(!categories){
        return Promise.reject('categories collection not found!');
    }
    return Promise.resolve(categories);
}
