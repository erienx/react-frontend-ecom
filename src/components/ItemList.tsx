import { Link } from "react-router-dom";
import { ItemProps } from "../types/types";
import Rating from "./ui/Rating";
import WishlistHeart from "./WishlistHeart";
import useAuth from "./providers/AuthContext";

type Props = {
    item: ItemProps;
    quantity?: number;
    onRemove?: () => void;
    onQuantityChange?: (delta: number) => void;
};

const ItemList = ({ item, quantity = 1, onRemove, onQuantityChange }: Props) => {
    const { authToken, currentUser, loading } = useAuth();

    return (
        <div className="relative group flex items-center justify-between bg-slate-200 p-4 rounded-xl shadow-inner hover:bg-slate-100 transition-all duration-300">
            <div className="flex items-center gap-6 w-full">
                <div className="relative flex-shrink-0">
                    <Link to={`/item/id/${item.id}`}>
                        <img
                            src={item.imageURL || "./no-img.png"}
                            alt={item.name}
                            className="w-36 h-24 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>
                    {currentUser && authToken && !loading && (
                        <div className="absolute -top-2 -right-2">
                            <WishlistHeart productId={item.id} />
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-3 flex-grow min-w-0">
                    <Link to={`/item/id/${item.id}`} className="group-hover:text-blue-600 transition-colors">
                        <p className="font-bold text-xl text-dark line-clamp-2 hover:underline">
                            {item.name}
                        </p>
                    </Link>

                    <div className="self-start">
                        <Rating rating={item.rating} />
                    </div>

                    <div className="flex items-center gap-4 flex-wrap">
                        <span className="text-accent1 font-bold text-xl">${item.price.toFixed(2)}</span>
                        {item.prevPrice && (
                            <>
                                <span className="text-slate-500 line-through text-lg">
                                    ${item.prevPrice.toFixed(2)}
                                </span>
                                <span className="text-accent2 text-lg font-semibold bg-accent2/10 px-2 py-1 rounded-md">
                                    {Math.round(100 - (item.price / item.prevPrice) * 100)}% OFF
                                </span>
                            </>
                        )}
                    </div>
                    {onQuantityChange && (
                        <div className="flex items-center gap-2 mt-2">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onQuantityChange(-1);
                                }}
                                className="px-2 py-1 bg-slate-300 rounded hover:bg-slate-400"
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <span className="px-3">{quantity}</span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onQuantityChange(1);
                                }}
                                className="px-2 py-1 bg-slate-300 rounded hover:bg-slate-400"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {onRemove && (
                <button
                    onClick={onRemove}
                    className="ml-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
                >
                    Remove
                </button>
            )}
        </div>
    );
};

export default ItemList;