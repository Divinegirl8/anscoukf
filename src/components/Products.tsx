import phoneImages from "../assets/products/02_smartphones.png"
import laptopImage from "../assets/products/08_laptop_and_tablet.png"
import usedLaptopImage from "../assets/products/06_used_laptops.png"
import accessoryImage from "../assets/products/image.png"

interface Product {
    title: string;
    description: string;
    image: string;
    alt: string;
}

// Swap the image paths for your real files (or imported assets)
const products: Product[] = [
    {
        title: "Mobile Phones",
        description: "Mobile devices for everyday communication and connectivity.",
        image: phoneImages,
        alt: "Smartphone showing its back camera and front screen",
    },
    {
        title: "Laptops & Computers",
        description:
            "Computing equipment, including used devices handled through refurbishment-related operations.",
        image: laptopImage,
        alt: "Open laptop with a blue abstract wallpaper",
    },
    {
        title: "Electronic Accessories",
        description:
            "Accessories for mobile devices and computing equipment.",
        image: accessoryImage,
        alt: "Phone, power bank and wireless earbuds on a wooden desk",
    },
    {
        title: "Used Equipment",
        description: "Used laptops designated for export and refurbishment.",
        image: usedLaptopImage,
        alt: "Warehouse aisle stocked with used laptops",
    },
];

const Products = () => {
    return (
        <section
            id="products"
            className="bg-black px-5 py-14 sm:px-10 md:py-24 lg:px-16 lg:py-32"
        >
            {/* Same rainbow styles as About.tsx. Delete this block once they live in your global CSS. */}
            <style>{`
                @keyframes rainbow-shift {
                    0%   { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
                .rainbow-text,
                .rainbow-bg {
                    background-image: linear-gradient(
                        90deg,
                        #ff4d4d, #ffa64d, #ffe14d, #4dff88,
                        #4dc3ff, #8a6bff, #ff4dd2, #ff4d4d
                    );
                    background-size: 200% 100%;
                    animation: rainbow-shift 4s linear infinite;
                }
                .rainbow-text {
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    color: transparent;
                }
                @media (prefers-reduced-motion: reduce) {
                    .rainbow-text, .rainbow-bg { animation: none; }
                }
            `}</style>
            <div className="mx-auto max-w-7xl text-left">
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                    <span className="rainbow-bg h-px w-10" aria-hidden="true" />
                    <span className="rainbow-text text-sm font-medium uppercase tracking-[0.2em] sm:text-base">
                        03 — Our Products
                    </span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                    Technology Products
                </h2>

                {/* Grid: 2 columns on mobile, 4 on desktop */}
                <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:mt-16 lg:grid-cols-4 lg:gap-x-8">
                    {products.map((product) => (
                        <li key={product.title} className="min-w-0">
                            <div className="aspect-4/3 overflow-hidden rounded-2xl bg-white sm:rounded-3xl">
                                <img
                                    src={product.image}
                                    alt={product.alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <h3 className="mt-4 text-lg font-bold leading-snug text-white sm:mt-5 sm:text-2xl">
                                {product.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-400 sm:text-lg lg:text-xl lg:leading-8">
                                {product.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Products;