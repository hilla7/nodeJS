import { IItemDto } from "./item.dto";

export interface IProductDto extends IItemDto {
    categoryId: string; 
    itemsInStock: number;
}