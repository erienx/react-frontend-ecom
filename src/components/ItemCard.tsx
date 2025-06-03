import { Link } from "react-router-dom";
import { ItemProps } from "../types/types";
import Rating from "./ui/Rating";
import WishlistHeart from "./WishlistHeart";
import useAuth from "./providers/AuthContext";

const ItemCard = ({ item }: { item: ItemProps }) => {
    const { authToken, currentUser, loading } = useAuth();

    return (
        <div className="relative group bg-slate-200 p-5 rounded-lg shadow-inner transition-all duration-300 hover:scale-101 hover:bg-slate-100">
            {currentUser && authToken && !loading && (
                <div className="absolute top-3 right-3 z-10">
                    <WishlistHeart productId={item.id} />
                </div>
            )}  

            <Link to={`/item/id/${item.id}`} className="flex flex-col gap-y-4 cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                    <img
                        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-102"
                        src={item.imageURL ? item.imageURL : './no-img.png'}
                        alt={item.name}
                    />
                </div>

                <div className="mt-2">
                    <p className="text-lg font-bold text-center text-dark line-clamp-2 h-[3.5rem] overflow-hidden">
                        {item.name}
                    </p>
                </div>

                <div className="flex justify-center">
                    <Rating rating={item.reviewAverage} />
                </div>

                <div className="flex flex-col items-center justify-center gap-3">
                    <p className="text-accent1 font-bold text-2xl">${item.price.toFixed(2)}</p>

                    <div className="flex flex-row items-center justify-center gap-x-4">
                        {(item.prevPrice && item.prevPrice != item.price) ? (
                            <>
                                <p className="text-slate-700 line-through text-lg">
                                    ${item.prevPrice.toFixed(2)}
                                </p>
                                <p className="text-accent2 text-lg font-semibold">
                                    {`${Math.round(100 - (item.price / item.prevPrice) * 100)}% OFF`}
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="text-lg invisible">$0.00</p>
                                <p className="text-lg invisible">0% OFF</p>
                            </>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ItemCard;