import { ICategory } from "./icategory.interfaces";

export interface Post {
    id: number;
    title: string;
    text: string;
    author: string;
    image: string;
    date: string;
    category: ICategory;
}
