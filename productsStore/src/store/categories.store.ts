import categoriesData from '../assets/data/categories.data.json';
import { ICategoryDto } from '../models/dto/category.dto.js';

export const getCategories: () => ICategoryDto[] = () => {
    return categoriesData;
}

export function getCategoriesAsync(): Promise<ICategoryDto[]> {
    return Promise.resolve(getCategories());
}
