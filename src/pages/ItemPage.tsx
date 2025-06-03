import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductResponse } from "../types/types";
import ProductDetails from "../components/ProductDetails";
import RelatedProducts from "../components/RelatedProducts";
import ReviewModal from "../components/ReviewModal";

export const ItemPage = () => {
    const { query } = useParams<{ query: string }>();
    const [product, setProduct] = useState<ProductResponse | null>(null);
    const [related, setRelated] = useState<ProductResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showReviews, setShowReviews] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/products/${query}`);
                const loadedProduct: ProductResponse = {
                    ...res.data,
                    prevPrice: 1000,
                    rating: 4.5,
                };
                setProduct(loadedProduct);

                const relatedRes = await axios.get(`http://localhost:8080/api/products`, {
                    params: {
                        categoryId: res.data.categoryId,
                        page: 0,
                        size: 6,
                    }
                });

                const filtered = relatedRes.data.content
                    .filter((item: ProductResponse) => item.id !== res.data.id)
                    .map((item: ProductResponse) => ({
                        ...item,
                        prevPrice: 1000,
                        rating: 4.5,
                    }));

                setRelated(filtered);
            } catch (err) {
                console.error("Failed to fetch product", err);
                setError("Unable to load product. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [query]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && showReviews) {
                setShowReviews(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [showReviews]);

    if (loading) return <p className="text-center mt-10 text-lg text-slate-600">Loading product...</p>;
    if (error) return <p className="text-center mt-10 text-lg text-red-500">{error}</p>;
    if (!product) return <p className="text-center mt-10 text-lg text-slate-600">Product not found.</p>;

    return (
        <div className="relative min-h-screen">
            <div className={`mb-3 transition-all duration-300 ease-out ${showReviews ? "sm:mr-96" : ""
                }`}>
                <ProductDetails product={product} onShowReviews={() => setShowReviews((prev) => !prev)} />
                <RelatedProducts categoryName={product.categoryName} products={related} />
            </div>

            {showReviews && product && (
                <ReviewModal
                    productId={product.id}
                    onClose={() => setShowReviews(false)}
                />
            )}
        </div>
    );
};