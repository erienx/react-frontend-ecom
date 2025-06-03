import { ProductResponse } from "../types/types";
import ItemCard from "./ItemCard";

type Props = {
    categoryName: string;
    products: ProductResponse[];
};

const RelatedProducts = ({ categoryName, products }: Props) => {
    if (products.length === 0) return null;

    return (
        <section className="mt-14 max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-dark mb-6">
                More from <span className="text-accent1">{categoryName}</span>
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </ul>
        </section>
    );
};

export default RelatedProducts;
