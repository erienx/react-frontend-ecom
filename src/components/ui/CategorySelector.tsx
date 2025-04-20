type PropsType = {
    category: string;
    setCategory: (arg0: string) => void;
}

const CategorySelector = ({ category, setCategory }: PropsType) => {
    const categories = ['All', 'Computers', 'Mobiles', 'Appliances', 'Audio'];
    return (
        <div className="my-4 sm:my-8 flex flex-col justify-center items-center gap-x-17  sm:flex-row sm:gap-y-3 sm:items-end">
            {categories.map((cat) => (
                <p className={` text-xl cursor-pointer transition-all duration-100  ${cat === category ? "underline scale-110 text-accent1" : "hover:text-accent2 hover:scale-105 text-dark"}`}
                    onClick={() => setCategory(cat)}
                >{cat}</p>
            ))}
        </div>
    )
}

export default CategorySelector