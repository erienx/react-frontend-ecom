import { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import { ItemProps } from "../types/types";
import CategorySelector from "./ui/CategorySelector";
import Button1 from "./ui/Button1";

const LOAD_ADDITIVE = 4;

const AllCards = () => {
    const [items, setItems] = useState<ItemProps[]>([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [categories, setCategories] = useState<string[]>(["All"]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/categories").then((res) => {
            const catNames = res.data.content.map((cat: any) => cat.name);
            setCategories(["All", ...catNames]);
        });
    }, []);

    useEffect(() => {
        setItems([]);
        setPage(0);
        setHasMore(true);
    }, [selectedCategory]);

    useEffect(() => {
        fetchItems(page);
    }, [page, selectedCategory]);

    const fetchItems = async (pageToLoad: number) => {
        try {
            const categoryParam =
                selectedCategory !== "All" ? `&categoryId=${await getCategoryId(selectedCategory)}` : "";
            const res = await axios.get(`http://localhost:8080/api/products?page=${pageToLoad}&size=${LOAD_ADDITIVE}${categoryParam}`);
            const newItems = res.data.content.map((item: any) => ({
                id: item.id,
                name: item.name,
                imageURL: item.imageURL,
                price: item.price,
                categoryName: item.categoryName,
                prevPrice: 1000,
                rating: 4.5,
            }));
            setItems((prev) => [...prev, ...newItems]);
            setHasMore(!res.data.last);
        } catch (error) {
            console.error("Error fetching items", error);
        }
    };

    const getCategoryId = async (categoryName: string): Promise<number | null> => {
        try {
            const res = await axios.get(`http://localhost:8080/api/categories`);
            const category = res.data.content.find((cat: any) => cat.name === categoryName);
            return category?.id ?? null;
        } catch {
            return null;
        }
    };

    const handleLoadMore = () => {
        if (hasMore) {
            setPage((prev) => prev + 1);
        }
    };

    return (
        <section className="spacey-y-9 my-4 mb-6 mx-20">
            <h2 className="text-center font-medium text-dark text-shadow-2xs">BEST SELLER</h2>

            <CategorySelector category={selectedCategory} setCategory={setSelectedCategory} categories={categories} />

            <ul className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map((item, index) => (
                    <li
                        key={item.id}
                        className="opacity-0 animate-fade-in-up"
                        style={{
                            animationDelay: `${(index % 4) * 35 + 50}ms`,
                            animationFillMode: "forwards",
                        }}
                    >
                        <ItemCard item={item} />
                    </li>
                ))}
            </ul>

            <p className="text-center text-dark mt-4">{items.length} items displayed</p>

            {hasMore && <Button1 onClick={handleLoadMore} text="load more" />}
        </section>
    );
};

export default AllCards;
