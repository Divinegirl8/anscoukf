import React from "react";



const HeroPage: React.FC = () => {
    return (
        <section
            id="top"
            className="relative flex min-h-screen items-center bg-linear-to-b from-[#0B1D36] via-[#10294A] to-[#12294A] pt-20 font-['Roboto',system-ui,sans-serif] text-white lg:pt-24"
        >
            <div className="mx-auto grid w-full max-md:max-w-300 max-w-400 items-center gap-10 px-6 py-12 sm:py-16 lg:grid-cols-2 lg:gap-20 lg:py-20 xl:gap-28">
                {/* Text */}
                <div className="flex flex-col items-start gap-6 lg:gap-7">
                    <span className="inline-flex h-9 items-center rounded-full bg-white/10 px-4.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#D6E0EE] sm:text-sm">
                        Technology · Trade · Supply
                    </span>

                    <h1 className="text-[36px] font-bold leading-[1.1] tracking-[-0.015em] text-white sm:text-5xl lg:text-[56px] xl:text-[68px] xl:leading-[1.08]">
                        Moving Technology.
                        <br />
                        Connecting Markets.
                    </h1>

                    <p className="max-w-135 text-lg leading-[1.65] text-[#C5D3E8] sm:text-xl">
                        A technology trading company engaged in electronics importation, export, and supply, connecting
                        mobile devices, computing equipment, and electronic accessories with market needs.
                    </p>

                    <div className="mt-2 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                        <a
                            href="#about"
                            className="flex h-14 items-center justify-center rounded-xl bg-white px-8 text-base font-medium text-[#0F2744] transition-colors hover:bg-[#E8EEF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1D36] sm:text-[17px]"
                        >
                            Explore Our Business
                        </a>
                        <a
                            href="#contact"
                            className="flex h-14 items-center justify-center rounded-xl border-[1.5px] border-[#7F9CC4] px-8 text-base font-medium text-white transition-colors hover:bg-white hover:text-[#0F2744] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-[17px]"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]">
                    {/* <img
                        src={HERO_IMAGE}
                        alt="Smartphone, laptop and wireless earbuds on a dark blue background"
                        className="h-full w-full object-cover"
                        loading="eager"
                    /> */}

                    <video
                        className="h-full w-full object-cover"
                        src="src/assets/heropage/4113236-hd_1280_720_25fps.m4v"
                        poster="/images/hero.jpg"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-label="Smartphone, laptop and wireless earbuds on a dark blue background"
                    />
                
                </div>
            </div>
        </section>
    );
};

export default HeroPage;