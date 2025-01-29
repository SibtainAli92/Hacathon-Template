import { groq  } from "next-sanity";

export const allProducts = groq`*[_type == 'products']{
     _id,
    name,
    _type,
    image,
    price,
    sizes,
    description,
    category
    }`

export const startthreeproduct = groq`*[_type == "products"][0..2]{
     _id,
    name,
    _type,
    image,
    price,
    sizes,
    description,
    category
    }`

export const endthreeproduct = groq`*[_type == "products"][4..6]{
     _id,
    name,
    _type,
    image,
    price,
    sizes,
    description,
    category
    }`