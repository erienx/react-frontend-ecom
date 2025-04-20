import { ItemProps } from "../types/types"
import Rating from "./ui/Rating"


const ItemCard = ({ item }: { item: ItemProps }) => {
    return (
        <div className="flex flex-col gap-y-5 bg-slate-200 p-5 rounded-md shadow-inner transition-all duration-450 hover:scale-102 cursor-pointer hover:bg-slate-100">
            <img className="rounded-lg w-full h-72 object-cover"
                src={item.imgPath ? item.imgPath : './no-img.png'} alt={item.name} />
            <div className="mt-2">
                <p className="text-2xl font-bold text-center text-dark sm:text-3xl">{item.name}</p>
            </div>

            <Rating rating={item.rating} />

            <div className="flex flex-col items-center justify-center gap-5">
                <p className="text-accent1 font-bold text-2xl">${item.price.toFixed(2)}</p>

                <div className="flex flex-row items-center justify-center gap-x-4">
                    {item.prevPrice ?
                        (
                            <>
                                <p className="text-slate-700 line-through text-xl">{item.prevPrice.toFixed(2)}</p>
                                <p className="text-accent2  text-xl">{`${Math.round(100 - (item.price / item.prevPrice) * 100)}% OFF`}</p>
                            </>
                        )
                        : (//placeholder to maintain size
                            <>
                                <p className="text-xl invisible">$0.00</p>
                                <p className="text-xl invisible">0% OFF</p>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemCard