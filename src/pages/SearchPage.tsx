import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { PageResponse, ProductResponse } from "../types/types";
import SearchInput from "../components/ui/SearchInput";
import SearchControls from "../components/ui/SearchControls";
import ProductList from "../components/ui/ProductListSearch";
import Pagination from "../components/ui/Pagination";

const SearchPage = () => {
    const { query } = useParams<{ query: string }>();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState<ProductResponse[]>([]);
    const [pageInfo, setPageInfo] = useState<PageResponse<ProductResponse> | null>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const currentPage = parseInt(searchParams.get('page') || '0');
    const sortBy = searchParams.get('sortBy') || 'name';
    const sortDir = searchParams.get('sortDir') || 'asc';
    const pageSize = parseInt(searchParams.get('size') || '12');

    const sortOptions = [
        { value: 'name-asc', label: 'Name (A-Z)', sortBy: 'name', sortDir: 'asc' },
        { value: 'name-desc', label: 'Name (Z-A)', sortBy: 'name', sortDir: 'desc' },
        { value: 'price-asc', label: 'Price (Low to High)', sortBy: 'price', sortDir: 'asc' },
        { value: 'price-desc', label: 'Price (High to Low)', sortBy: 'price', sortDir: 'desc' },
        { value: 'addedAt-desc', label: 'Newest First', sortBy: 'addedAt', sortDir: 'desc' },
        { value: 'addedAt-asc', label: 'Oldest First', sortBy: 'addedAt', sortDir: 'asc' },
    ];

    const pageSizeOptions = [
        { value: 12, label: '12 per page' },
        { value: 24, label: '24 per page' },
        { value: 48, label: '48 per page' },
    ];

    const updateSearchParams = (updates: Record<string, string | number>) => {
        const newParams = new URLSearchParams(searchParams);
        Object.entries(updates).forEach(([key, value]) => newParams.set(key, value.toString()));
        setSearchParams(newParams);
    };
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:8080/api/products', {
                    params: { page: currentPage, size: pageSize, sortBy, sortDir, name: query || '', }
                });
                const data = response.data;

                // Round the reviewAverage to one decimal place for each product
                const loadedProducts = data.content.map((product: ProductResponse) => ({
                    ...product,
                    reviewAverage: product.reviewAverage ? Math.round(product.reviewAverage * 10) / 10 : 0,
                }));

                setProducts(loadedProducts);
                setPageInfo(data);
            } catch (error) {
                setError("Failed to load search results. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [query, currentPage, sortBy, sortDir, pageSize]);


    const handleSearch = (newQuery: string) => {
        navigate(`/search/term/${encodeURIComponent(newQuery)}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <SearchInput initialQuery={query || ""} onSearch={handleSearch} />
            {error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <>
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {query ? `Search results for "${query}"` : 'All Products'}
                        </h1>
                        <p className="text-gray-600">
                            Showing {products.length} of {pageInfo?.totalElements} products
                        </p>
                    </div>
                    <SearchControls
                        sortValue={`${sortBy}-${sortDir}`}
                        pageSize={pageSize}
                        viewMode={viewMode}
                        sortOptions={sortOptions}
                        pageSizeOptions={pageSizeOptions}
                        onSortChange={(value) => {
                            const opt = sortOptions.find(o => o.value === value);
                            if (opt) updateSearchParams({ sortBy: opt.sortBy, sortDir: opt.sortDir, page: 0 });
                        }}
                        onPageSizeChange={(size) => updateSearchParams({ size, page: 0 })}
                        onViewChange={setViewMode}
                    />
                    <ProductList products={products} viewMode={viewMode} />
                    {pageInfo && pageInfo.totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={pageInfo.totalPages}
                            first={pageInfo.first}
                            last={pageInfo.last}
                            onPageChange={(p) => updateSearchParams({ page: p })}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default SearchPage;
