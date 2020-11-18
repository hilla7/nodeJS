import { Item } from "./item.model";

export interface Product extends Item {
    categoryId: string; 
    itemsInStock: number;
}