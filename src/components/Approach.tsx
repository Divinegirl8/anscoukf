import type { ReactNode } from "react";

interface Principle {
    title: string;
    description: string;
    icon: ReactNode;
}

const EMAIL = "anscoukf@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Business Enquiry")}`;

const iconProps = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
};

const principles: Principle[] = [
    {
        title: "Business Relationships",
        description:
            "Building professional relationships with customers, suppliers, and trading partners.",
        // handshake
        icon: (
            <svg {...iconProps}>
                <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" />
                <path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2l-3.9-3.9" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1.4 1.4 0 0 0 2-2" />
                <path d="M3 4h8" />
                <path d="m6 15 3 3" />
                <path d="m8.5 8.5 3.1-2.6a2 2 0 0 1 2.7.1l.9.9a2 2 0 0 0 1.4.6H21" />
            </svg>
        ),
    },
    {
        title: "Cross-Border Trade",
        description:
            "Supporting the movement of technology products through import and export activities.",
        // globe
        icon: (
            <svg {...iconProps}>
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3a14 14 0 0 1 0 18" />
                <path d="M12 3a14 14 0 0 0 0 18" />
            </svg>
        ),
    },
    {
        title: "Product-Focused Operations",
        description:
            "Maintaining a clear focus on electronics, product handling, and supply requirements.",
        // package
        icon: (
            <svg {...iconProps}>
                <path d="M21 8v8a2 2 0 0 1-1 1.7l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.7l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
            </svg>
        ),
    },
];

const Approach = () => {
    return (
        <section
            id="approach"
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
                        04 — Our Approach
                    </span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                    A Practical Approach to Technology Trading
                </h2>

                <p className="mt-5 max-w-3xl text-lg text-gray-400 sm:text-xl lg:text-2xl">
                    The principles behind our business
                </p>

                {/* Principles: stacked on mobile/tablet, 3 columns on desktop */}
                <ul className="mt-10 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12">
                    {principles.map((item) => (
                        <li key={item.title} className="flex gap-4 sm:gap-5">
                            <span className="mt-1 shrink-0 text-slate-400">
                                {item.icon}
                            </span>
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

                {/* Contact card */}
                <div
                    id="contact"
                    className="mt-14 flex flex-col gap-6 rounded-3xl bg-[#EEF3FA] p-6 sm:p-10 lg:mt-20 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:p-14"
                >
                    <div className="max-w-3xl">
                        <h3 className="text-2xl font-bold leading-tight text-[#12263F] sm:text-3xl lg:text-5xl">
                            Let's Build a Business Connection.
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl lg:leading-8">
                            For product enquiries, supply opportunities, or potential
                            business partnerships, we welcome you to get in touch.
                        </p>
                    </div>

                    <a
                        href={MAILTO}
                        className="inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-[#12263F] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#1b3a5f] focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300 sm:text-xl lg:w-auto"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Approach;