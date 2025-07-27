import { SubCategories } from "./subCategories";

export interface Categories {
    id: string,
    categoryName: string,
    subCategories?: SubCategories[]
}