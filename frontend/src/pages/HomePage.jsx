import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
    { href: "/jeans", name: "Jeans", imageUrl: "/jeans2.jpg" },
    { href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirt.jpg" },
    { href: "/shoes", name: "Shoes", imageUrl: "/shoe.jpg" },
    { href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
    { href: "/jackets", name: "Jackets", imageUrl: "/jackets1.jpg" },
    { href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
    { href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const HomePage = () => {
    const { fetchFeaturedProducts, products, isLoading } = useProductStore();

    useEffect(() => {
        fetchFeaturedProducts();
    }, [fetchFeaturedProducts]);

    const backgroundImageURL = "https://tse1.mm.bing.net/th?id=OIP.Qs0_bV-nKtIbLU5-raAz1QHaEK&pid=Api&P=0&h=180";

    return (
        <div className='relative min-h-screen overflow-hidden bg-amber-50/80 backdrop-blur-sm transition duration-300 bg-[url(https://tse1.mm.bing.net/th?id=OIP.Qs0_bV-nKtIbLU5-raAz1QHaEK&pid=Api&P=0&h=180)] bg-cover bg-center'>
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <h1 className='text-center text-5xl sm:text-6xl font-bold text-amber-800 hover:text-amber-900 transition duration-300 mb-4'>
                    Explore Our Categories
                </h1>
                <p className='text-center text-xl text-amber-700 transition duration-300 mb-12'>
                    Discover the latest trends in eco-friendly fashion
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {categories.map((category) => (
                        <CategoryItem category={category} key={category.name} />
                    ))}
                </div>

                {!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
            </div>
        </div>
    );
};

export default HomePage;