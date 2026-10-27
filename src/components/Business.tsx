interface BusinessItem {
    title: string;
    description: string;
    image: string;
    alt: string;
}

// Swap the image paths for your real files (or imported assets)
const items: BusinessItem[] = [
    {
        title: "Electronics Importation",
        description:
            "Importing mobile phones, laptops, and electronic accessories to support the company's product supply activities.",
        image: "/images/electronics-importation.jpg",
        alt: "Assorted smartphones arranged on a table",
    },
    {
        title: "Electronics Export",
        description:
            "Facilitating the export of technology products as part of the company's international trading operations.",
        image: "/images/electronics-export.jpg",
        alt: "Warehouse with boxed electronics ready for export",
    },
    {
        title: "Used-Laptop Export for Refurbishment",
        description:
            "Exporting used laptops for refurbishment as part of the product lifecycle and equipment recovery process.",
        image: "/images/laptop-refurbishment.jpg",
        alt: "Rows of used laptops on shelves awaiting refurbishment",
    },
    {
        title: "Technology Product Supply",
        description:
            "Supplying a range of electronic devices and accessories according to product availability and market requirements.",
        image: "/images/product-supply.jpg",
        alt: "Laptop, headphones and accessories on a clean surface",
    },
];

const Business = () => {
    return (
        <section
            id="business"
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
                        02 — Our Business
                    </span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                    What We Do
                </h2>

                <p className="mt-5 max-w-3xl text-lg text-gray-400 sm:text-xl lg:text-2xl">
                    Our core areas of operation
                </p>

                {/* Items: stacked rows on mobile/tablet, 2-column cards on desktop */}
                <ul className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 lg:mt-16 lg:grid-cols-2 lg:gap-y-16">
                    {items.map((item) => (
                        <li
                            key={item.title}
                            className="flex gap-5 border-b border-white/10 pb-10 last:border-b-0 last:pb-0 sm:gap-8 lg:flex-col lg:gap-6 lg:border-b-0 lg:pb-0"
                        >
                            <div className="h-32 w-32 shrink-0 overflow-hidden rounded-2xl sm:h-48 sm:w-48 lg:aspect-4/3 lg:h-auto lg:w-full lg:rounded-3xl">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-base leading-relaxed text-gray-300 sm:text-lg lg:mt-3 lg:text-xl lg:leading-8">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Business;