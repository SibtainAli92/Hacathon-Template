import { Key } from "readline";

export interface Products {
    productImage: any;
    title: any;
    discountCopen: any;
    originalPrice: any;
    ratingImage: string;
    _id: string;
    name: string;
    _type: "product";
    image? :URL
    price: number;
    colors: string[]; // Array of available colors
    sizes: string[];
    description?: string;
    quantity:number
}