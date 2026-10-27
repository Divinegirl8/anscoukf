interface AboutProps {
    companyName?: string;
}

const About = ({ companyName = "Anscoukf" }: AboutProps) => {
    return (
        <section
            id="about"
            className="bg-black px-5 py-14 sm:px-10 md:py-24 lg:px-16 lg:py-32"
        >
            <div className="mx-auto max-w-7xl text-left">
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-slate-500/60" aria-hidden="true" />
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-base">
                        01 — About the Company
                    </span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                    Technology Trading Built Around{" "}
                    <span className="text-slate-300">Business Needs</span>
                </h2>

                {/* Body */}
                <div className="mt-10 max-w-4xl space-y-6 text-lg leading-relaxed text-gray-300 sm:text-xl lg:mt-14 lg:text-2xl lg:leading-10">
                    <p>
                        <span className="font-semibold text-white">{companyName}</span> is
                        an electronics import and export company focused on mobile phones,
                        laptops, and electronic accessories. Its operations include the
                        movement and supply of technology products across markets, as well
                        as the export of used laptops for refurbishment.
                    </p>

                    <p>
                        Through its trading activities, the company aims to support
                        dependable supply relationships and facilitate the movement of
                        technology products through relevant commercial channels.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;