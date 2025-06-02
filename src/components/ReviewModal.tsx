import { useEffect, useState } from "react";
import axios from "axios";
import { ReviewResponse } from "../types/types";
import Rating from "./ui/Rating";
import { X } from "lucide-react";

type Props = {
    productId: number;
    onClose: () => void;
};

const ReviewModal = ({ productId, onClose }: Props) => {
    const [reviews, setReviews] = useState<ReviewResponse[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/reviews/product/${productId}`);
                setReviews(res.data.content);
            } catch (err) {
                console.error("Failed to fetch reviews", err);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [productId]);

    return (
        <>
            <div className="fixed inset-0 z-40 bg-black bg-opacity-50 xl:hidden" onClick={onClose} />

            <div className="fixed top-0 right-0 z-50 w-full xl:w-96 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out">
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Reviews</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                        <X size={20} className="text-gray-600" />
                    </button>
                </div>

                <div className="px-6 py-4 h-full overflow-y-auto pb-20">
                    {loading ? (
                        <div className="flex items-center justify-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        </div>
                    ) : reviews.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-3">
                                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0v10a2 2 0 002 2h6a2 2 0 002-2V8m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0v10a2 2 0 002 2h6a2 2 0 002-2V8" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">No reviews yet</h3>
                            {/* <p className="text-gray-500">Be the first to review this product!</p> */}
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-600">
                                        {reviews.length} review{reviews.length !== 1 ? 's' : ''}
                                    </span>
                                    <div className="flex items-center">
                                        <Rating rating={Math.round((reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length) * 10) / 10} />
                                    </div>
                                </div>
                            </div>

                            {reviews.map((review) => (
                                <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{review.userName}</h4>
                                            <div className="flex items-center mt-1">
                                                <Rating rating={review.rating} />
                                                <span className="ml-2 text-sm text-gray-500">
                                                    {new Date(review.addedAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{review.text}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ReviewModal;