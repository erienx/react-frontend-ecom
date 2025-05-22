export type ItemProps = {
  id: number;
  name: string;
  imgPath: string;
  price: number;
  prevPrice?: number;
  rating: number;
  categoryName: string;
};
export type User = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    role: 'admin' | 'user';
}

export type ProductResponse= {
    id: number;
    name: string;
    brandId: number;
    brandName: string;
    categoryId: number;
    categoryName: string;
    imageURL: string;
    description: string;
    price: number;
    quantity: number;
    addedAt: string;
    prevPrice?: number;
    rating: number;
}