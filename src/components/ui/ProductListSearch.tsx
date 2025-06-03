import ItemCard from "../../components/ItemCard";
import ItemList from "../../components/ItemList";
import { ProductResponse } from "../../types/types";

interface ProductListProps {
    products: ProductResponse[];
    viewMode: 'grid' | 'list';
}

const ProductList = ({ products, viewMode }: ProductListProps) => {
    if (!products.length) {
        return (
            <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or browse our categories</p>
            </div>
        );
    }

    return (
        <div className={viewMode === 'grid'
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
            : "space-y-4 mb-8"}>
            {products.map(product => viewMode === 'grid'
                ? <ItemCard key={product.id} item={product} />
                : <ItemList key={product.id} item={product} />)}
        </div>
    );
};

export default ProductList;