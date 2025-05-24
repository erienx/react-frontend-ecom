import { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "../components/ItemList";
import useAuth from "../components/providers/AuthContext";
import { ItemProps, WishlistResponse } from "../types/types";

const WishlistPage = () => {
    const { authToken, currentUser } = useAuth();
    const [wishlistItems, setWishlistItems] = useState<ItemProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchWishlist = async () => {
        if (!currentUser || !authToken) {
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const res = await axios.get<WishlistResponse>("http://localhost:8080/api/wishlists/me", {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                },
            });


            if (res.data.products && res.data.products.length > 0) {
                const fullItems = await Promise.all(
                    res.data.products.map(async (product) => {
                        try {
                            const prodRes = await axios.get<ItemProps>(`http://localhost:8080/api/products/${product.id}`);
                            return { ...prodRes.data, prevPrice: 1000, rating: 4.5 };
                        } catch (error) {
                            console.error(`Error fetching product ${product.id}:`, error);
                            return {
                                id: product.id, name: product.name, price: 0, prevPrice: 1000, rating: 4.5, imageURL: './no-img.png'
                            } as ItemProps;
                        }
                    })
                );
                setWishlistItems(fullItems);
            } else {
                setWishlistItems([]);
            }
        } catch (err: any) {

            setError(`Failed to load wishlist: ${err.response?.data?.message || err.message}`);
            setWishlistItems([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWishlist();
    }, [currentUser, authToken]);

    if (!currentUser) {
        return (
            <div className="max-w-5xl mx-auto py-10 px-6">
                <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
                <p className="text-lg text-gray-600">Please log in to view your wishlist.</p>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-10 px-6">
            <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>


            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                    <p className="text-lg text-gray-600 ml-4">Loading wishlist...</p>
                </div>
            ) : error ? (
                <div className="text-center py-10">
                    <p className="text-lg text-red-600 mb-4">{error}</p>
                    <button onClick={fetchWishlist} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> Retry
                    </button>
                </div>
            ) : wishlistItems.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-lg text-gray-600 mb-4">Your wishlist is empty.</p>
                    <p className="text-sm text-gray-500">Start adding items to your wishlist by clicking the heart icon on products!</p>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {wishlistItems.map(item => (
                        <ItemList key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistPage;