import { useEffect, useState } from "react";
import axios from "axios";
import { ProductResponse } from "../types/types";
import useAuth from "./providers/AuthContext";

type Props = {
    product: ProductResponse;
};

const CartControls = ({ product }: Props) => {
    const { currentUser, loading: userLoading, authToken } = useAuth();
    const [inCart, setInCart] = useState<boolean>(false);
    const [cartItemId, setCartItemId] = useState<number | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setInCart(false);
        setCartItemId(null);
        setQuantity(1);
    }, [product.id]);

    useEffect(() => {
        const checkCart = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/shopping-carts", {
                    headers: { Authorization: `Bearer ${authToken}` },
                });
                const item = res.data.find((entry: any) => entry.productId === product.id);
                if (item) {
                    setInCart(true);
                    setCartItemId(item.id);
                    setQuantity(item.quantity);
                }
            } catch (err) {
                console.error("Failed to check cart", err);
            }
        };

        if (!userLoading && currentUser) {
            checkCart();
        }
    }, [userLoading, currentUser, product.id]);

    const handleAddToCart = async () => {
        if (!currentUser) return;

        setLoading(true);
        try {
            const res = await axios.post(
                "http://localhost:8080/api/shopping-carts",
                {
                    userId: currentUser.userId,
                    productId: product.id,
                    quantity: Math.floor(quantity),
                },
                {
                    headers: { Authorization: `Bearer ${authToken}` },
                }
            );

            setInCart(true);
            setCartItemId(res.data.id);
        } catch (err: any) {
            if (axios.isAxiosError(err)) {
                console.error("Add to cart failed", err.response?.data);
            } else {
                console.error("Unexpected error", err);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveFromCart = async () => {
        if (!cartItemId) {
            console.log("aaa");
            return;
        }

        setLoading(true);
        try {
            await axios.delete(`http://localhost:8080/api/shopping-carts/${cartItemId}`, {
                headers: { Authorization: `Bearer ${authToken}` },
            });
            setInCart(false);
            setCartItemId(null);
            setQuantity(1);
        } catch (err) {
            console.error("Remove from cart failed", err);
        } finally {
            setLoading(false);
        }
    };

    const increaseQuantity = () => {
        if (quantity < product.quantity) setQuantity(q => q + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(q => q - 1);
    };

    return (
        <>
            <div className="flex items-center gap-4 mt-4">
                <button
                    className="px-3 py-1 text-lg font-bold bg-gray-300 rounded-xl disabled:opacity-50 cursor-pointer"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                >
                    −
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                    className="px-3 py-1 text-lg font-bold bg-gray-300 rounded-xl disabled:opacity-50 cursor-pointer"
                    onClick={increaseQuantity}
                    disabled={quantity >= product.quantity}
                >
                    +
                </button>
            </div>

            <button
                onClick={inCart ? handleRemoveFromCart : handleAddToCart}
                disabled={!currentUser || loading || product.quantity === 0}
                className={`mt-4 px-6 py-3 rounded-xl text-lg font-semibold shadow transition-all duration-200 cursor-pointer ${product.quantity === 0 || !currentUser || loading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : inCart
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-accent1 text-white hover:bg-accent1-hover"
                    }`}
            >
                {inCart ? "Remove from Cart" : "Add to Cart"}
            </button>
        </>
    );
};

export default CartControls;
