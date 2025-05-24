import { useState, useEffect } from "react";
import { Heart, HeartOff } from "lucide-react";
import axios from "axios";
import useAuth from "./providers/AuthContext";

type Props = {
    productId: number;
    className?: string;
};

const WishlistHeart = ({ productId, className = "" }: Props) => {
    const { currentUser, authToken, loading: userLoading } = useAuth();
    const [inWishlist, setInWishlist] = useState(false);
    const [loading, setLoading] = useState(false);
    const [wishlistId, setWishlistId] = useState<number | null>(null);

    useEffect(() => {
        if (!currentUser || !authToken) return;

        const fetchWishlist = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/wishlists/me", {
                    headers: { Authorization: `Bearer ${authToken}` }
                });

                if (res.data && res.data.products) {
                    const isInWishlist = res.data.products.some((p: any) => p.id === productId);
                    setInWishlist(isInWishlist);
                    setWishlistId(res.data.id);
                }
            } catch (error: any) {
                console.error("Error fetching wishlist:", error);
                setInWishlist(false);
                setWishlistId(null);
            }
        };

        fetchWishlist();
    }, [currentUser, productId, authToken]);

    const toggleWishlist = async () => {
        if (!currentUser || !authToken) return;
        setLoading(true);

        try {
            let currentWishlistId = wishlistId;
            let currentProductIds: number[] = [];

            const res = await axios.get("http://localhost:8080/api/wishlists/me", {
                headers: { Authorization: `Bearer ${authToken}` },
            });

            currentWishlistId = res.data.id;
            currentProductIds = res.data.products.map((p: any) => p.id);

            const productIdSet = new Set(currentProductIds);
            const willBeInWishlist = !productIdSet.has(productId);

            if (productIdSet.has(productId)) {
                productIdSet.delete(productId);
            } else {
                productIdSet.add(productId);
            }

            await axios.put(
                `http://localhost:8080/api/wishlists/${currentWishlistId}`,
                {
                    userId: currentUser.userId,
                    productIds: Array.from(productIdSet),
                },
                { headers: { Authorization: `Bearer ${authToken}` } }
            );

            setInWishlist(willBeInWishlist);
            setWishlistId(currentWishlistId);

        } catch (err) {
            console.error("Wishlist update failed", err);
        } finally {
            setLoading(false);
        }
    };

    if (!currentUser || userLoading) return null;

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWishlist();
            }}
            className={`p-2 rounded-full  transition-all  duration-300  transform  hover:scale-110  active:scale-95 disabled:opacity-50  disabled:cursor-not-allowed shadow-md backdrop-blur-sm
                ${inWishlist
                    ? 'bg-red-50 text-red-600 hover:bg-red-100 border-2 border-red-200'
                    : 'bg-white/80 text-gray-400 hover:text-red-500 hover:bg-red-50 border-2 border-gray-200 hover:border-red-200'
                }
                ${className}`}
            disabled={loading}
            title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
            {loading ? (
                <div className="animate-spin h-5 w-5 border-2 border-red-500 border-t-transparent rounded-full" />
            ) : inWishlist ? (
                <Heart className="h-5 w-5 fill-current drop-shadow-sm" />
            ) : (
                <HeartOff className="h-5 w-5 drop-shadow-sm" />
            )}
        </button>
    );
};

export default WishlistHeart;