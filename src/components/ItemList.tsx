import { Link } from "react-router-dom";
import { ItemProps } from "../types/types";
import Rating from "./ui/Rating";

type Props = {
    item: ItemProps;
    onRemove?: () => void;
};

const ItemList = ({ item, onRemove }: Props) => {
    return (
        <div className="flex items-center justify-between bg-slate-200 p-4 rounded-xl shadow-inner hover:bg-slate-100 transition-all duration-300">
            <Link to={`/item/id/${item.id}`} className="flex items-center gap-6 w-full">
                <img
                    src={item.imageURL || "./no-img.png"}
                    alt={item.name}
                    className="w-36 h-24 object-cover rounded-lg shadow"
                />
                <div className="flex flex-col gap-3 flex-grow">
                    <p className="font-bold text-xl text-dark line-clamp-2">{item.name}</p>
                    <div className="self-start">
                        <Rating rating={item.rating} />
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-accent1 font-bold text-lg">${item.price.toFixed(2)}</span>
                        {item.prevPrice && (
                            <>
                                <span className="text-slate-500 line-through text-md">${item.prevPrice.toFixed(2)}</span>
                                <span className="text-accent2 text-md">
                                    {Math.round(100 - (item.price / item.prevPrice) * 100)}% OFF
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </Link>
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
