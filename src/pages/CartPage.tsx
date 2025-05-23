import { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "../components/ItemList";
import useAuth from "../components/providers/AuthContext";
import { CartItem, ItemProps, ShoppingCartResponse } from "../types/types";

const CartPage = () => {
  const { authToken, currentUser } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const res = await axios.get<ShoppingCartResponse[]>(
        "http://localhost:8080/api/shopping-carts",
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      const fullItems = await Promise.all(
        res.data.map(async (entry) => {
          const productRes = await axios.get<ItemProps>(
            `http://localhost:8080/api/products/${entry.productId}`
          );
          return {
            cartId: entry.id,
            quantity: entry.quantity,
            product: {
              ...productRes.data,
              prevPrice: 1000,
              rating: 4.5,
            },
          };
        })
      );

      setCartItems(fullItems);
    } catch (err) {
      console.error("error fetching cart items or products", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (cartId: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/shopping-carts/${cartId}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setCartItems(prev => prev.filter(item => item.cartId !== cartId));
    } catch (err) {
      console.error("error removing cart item", err);
    }
  };
  const handleQuantityChange = async (cartId: number, productId: number, quantity: number,userId: number | null | undefined) => {
    if (quantity < 1 || !userId) return;
    // console.log(userId,
    //   productId,
    //   quantity)

      const cartItem = cartItems.find(item => item.cartId === cartId);
  if (!cartItem) return;

  const availableStock = cartItem.product.quantity;
  if (quantity > availableStock) {
    alert(`Only ${availableStock} items available in stock.`);
    return;
  }
    try {
      const res = await axios.put(
        `http://localhost:8080/api/shopping-carts/${cartId}`,
        {
          userId,
          productId,
          quantity,
        },
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      setCartItems(prev =>
        prev.map(item =>
          item.cartId === cartId ? { ...item, quantity: quantity } : item
        )
      );
    } catch (err) {
      console.error("Failed to update quantity", err);
    }
  };


  useEffect(() => {
    if (currentUser) {
      fetchCartItems();
    }
  }, [currentUser]);
  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      {loading ? (
        <p className="text-lg text-gray-600">Loading cart...</p>
      ) : cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map(item => (

            <ItemList
              key={item.cartId}
              item={item.product}
              quantity={item.quantity}
              onRemove={() => handleRemove(item.cartId)}
              onQuantityChange={(delta) => handleQuantityChange( item.cartId, item.product.id , item.quantity + delta,currentUser?.userId)}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
