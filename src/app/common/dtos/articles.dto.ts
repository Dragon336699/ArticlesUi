import { ArticleImages } from "../entity/articleImages";
import { Categories } from "../entity/categories";

export interface ArticlesDto {
    id: string,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    author: string,
    articleImages: ArticleImages[],
    categories: Categories[]
}