import { useEffect, useState } from "react";
import Rating from "../components/ui/Rating";
import { ProductResponse } from "../types/types";
import axios from "axios";
import useAuth from "./providers/AuthContext";

type Props = {
    product: ProductResponse;
};

const ProductDetails = ({ product }: Props) => {
    const { currentUser, loading: userLoading, authToken } = useAuth();
    const [inCart, setInCart] = useState<boolean>(false);
    const [cartItemId, setCartItemId] = useState<number | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);


    const discount = product.prevPrice && product.prevPrice > product.price ? Math.round(100 - (product.price / product.prevPrice) * 100) : null;
    // useEffect(() => {
    //     console.log(cartItemId);
    // }, [cartItemId])

    useEffect(() => {


        const checkCart = async () => {
            // console.log(currentUser, userLoading)
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

        checkCart();
    }, [userLoading, currentUser, product.id, inCart]);

    const handleAddToCart = async () => {
        if (userLoading || !currentUser) return;

        setLoading(true);
        try {
            await axios.post("http://localhost:8080/api/shopping-carts", {
                userId: currentUser.userId,
                productId: product.id,
                quantity: Math.floor(quantity),
            }, {
                headers: { Authorization: `Bearer ${authToken}` },
            });
            setInCart(true);
        } catch (err: any) {
            if (axios.isAxiosError(err)) {
                console.error("Add to cart failed", err.response?.data);
            } else {
                console.error("error", err);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveFromCart = async () => {
        if (!cartItemId) return;

        setLoading(true);
        try {
            await axios.delete(`http://localhost:8080/api/shopping-carts/${cartItemId}`, {
                headers: { Authorization: `Bearer ${authToken}` },
            });
            setInCart(false);
            setCartItemId(null);
            setQuantity(1);
        } catch (err) {
            console.error("remove from cart failed", err);
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
        <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-slate-200 shadow-2xl rounded-2xl">
            <img
                src={product.imageURL || "/no-img.png"}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />

            <section className="flex flex-col gap-6">
                <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

                <div className="flex items-center gap-3">
                    <Rating rating={product.rating} />
                    <span className="text-slate-500 text-sm">({product.rating.toFixed(1)} / 5)</span>
                </div>

                <p className="text-lg text-slate-700 leading-relaxed">{product.description}</p>

                <div className="flex items-center gap-4 mt-2">
                    <span className="text-3xl font-bold text-accent1">${product.price.toFixed(2)}</span>
                    {discount !== null && (
                        <>
                            <span className="text-slate-500 line-through text-xl">${product.prevPrice?.toFixed(2)}</span>
                            <span className="text-accent2 text-xl">{discount}% OFF</span>
                        </>
                    )}
                </div>

                <div className="flex flex-col gap-1 text-md text-slate-400">
                    <p><span className="font-semibold">Category:</span> {product.categoryName}</p>
                    <p><span className="font-semibold">Brand:</span> {product.brandName}</p>
                    <p><span className="font-semibold">Added:</span> {new Date(product.addedAt).toLocaleDateString()}</p>
                    <p><span className="font-semibold">Availability:</span> {product.quantity} in stock</p>
                </div>

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

                {/* Action button */}
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
            </section>
        </main>
    );
};

export default ProductDetails;
