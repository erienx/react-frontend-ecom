export type ItemProps = {
  id: number;
  name: string;
  imageURL: string;
  price: number;
  prevPrice?: number;
  rating: number;
  categoryName: string;
  quantity: number;
};
export type User = {
    userId: number;
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
export type ShoppingCartResponse= {
    id: number;
    userId: number;
    userName: string;
    productId: number;
    productName: string;
    quantity: number;
}

export type CartItem= {
    cartId: number;
    quantity: number;
    product: ItemProps;
}
export type ReviewResponse = {
  id: number;
  userId: number;
  userName: string;
  productId: number;
  productName: string;
  rating: number;
  text: string;
  addedAt: string; 
}
