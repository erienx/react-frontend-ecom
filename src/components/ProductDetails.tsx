import Rating from "../components/ui/Rating";
import { ProductResponse } from "../types/types";
import CartControls from "../components/CartControls";
import WishlistHeart from "./WishlistHeart";
import useAuth from "./providers/AuthContext";

type Props = {
    product: ProductResponse;
    onShowReviews: () => void;
};

const ProductDetails = ({ product, onShowReviews }: Props) => {
    const { authToken, currentUser, loading } = useAuth();
    const discount = product.prevPrice && product.prevPrice > product.price ? Math.round(100 - (product.price / product.prevPrice) * 100) : null;

    return (
        <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-slate-200 shadow-2xl rounded-2xl">
            <div className="relative">
                <img src={product.imageURL || "/no-img.png"} alt={product.name}
                    className="w-full h-[500px] object-cover rounded-2xl shadow-lg" />
                
                {currentUser && authToken && !loading && (
                    <div className="absolute top-4 right-4 z-10">
                        <WishlistHeart productId={product.id} />
                    </div>
                )}
            </div>

            <section className="flex flex-col gap-6">
                <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
                <h4 className="text-xl font-semi-bold text-gray-600">by <span className="font-bold">{product.brandName}</span></h4>

                <div className="flex items-center gap-3 mb-2">
                    <Rating rating={product.rating} />
                    <button
                        onClick={onShowReviews}
                        className="text-md text-blue-500 cursor-pointer hover:text-blue-700">See reviews</button>
                </div>


                <p className="text-lg text-slate-700 leading-relaxed">{product.description}</p>



                <div className="flex flex-col gap-1 text-md text-slate-400">
                    <p><span className="font-semibold">Category:</span> {product.categoryName}</p>
                    <p> <span className="font-semibold">Added:</span>{" "} {new Date(product.addedAt).toLocaleDateString()}</p>
                    <p><span className="font-semibold">Availability:</span> {product.quantity} in stock</p>
                </div>

                <div className="flex items-center gap-4 mt-2">
                    <span className="text-3xl font-bold text-accent1"> ${product.price.toFixed(2)} </span>
                    {discount !== null && (
                        <>
                            <span className="text-slate-500 line-through text-xl">${product.prevPrice?.toFixed(2)}</span>
                            <span className="text-accent2 text-xl">{discount}% OFF</span>
                        </>
                    )}
                </div>

                <CartControls product={product} />
            </section>
        </main>
    );
};

export default ProductDetails;
