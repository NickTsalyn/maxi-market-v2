export interface Category {
  categoryName: string;
  imgUrl: string;
}

export interface ProductCard {
  name: string;
  imgUrl: string;
  description: string;
  price: string;
}

export interface ProductCardFilter {
  name: string;
  imgUrl: string;
  description: string;
  price: string;
}

export interface Auth {
  login: string;
  password: string;
}

export interface City {
  AreaDescription: string;
  Description: string;
}
