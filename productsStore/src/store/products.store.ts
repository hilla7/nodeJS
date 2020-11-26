import productsData from '../assets/data/products.data.json';
import { IProductDto } from '../models/dto/product.dto.js';

export const getProducts: () => IProductDto[] = () => {
    return productsData;
}

export function getProductsAsync(): Promise<IProductDto[]> {
    return Promise.resolve(getProducts());
}
