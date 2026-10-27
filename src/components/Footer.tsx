const BUSINESS_NAME = "Ansco UKF LLC";
const EMAIL = "anscoukf@gmail.com";
const PHONE_DISPLAY = "(980) 318-9533";
const PHONE_LINK = "tel:+19803189533";
const ADDRESS_LINES = ["10931 E. Independence Blvd, Ste A-5", "Matthews, NC 28105"];
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "10931 E Independence Blvd Ste A-5, Matthews, NC 28105"
)}`;

const linkClass =
    "text-gray-200 underline-offset-4 transition hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded";

const Footer = () => {
    return (
        <footer
            id="footer"
            className="bg-[#12263F] px-5 py-12 sm:px-10 md:py-16 lg:px-16 lg:py-20"
        >
            <div className="mx-auto max-w-7xl text-left">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
                    {/* Brand */}
                    <div className="max-w-xl">
                        <h2 className="text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
                            {BUSINESS_NAME}
                        </h2>
                        <p className="mt-3 text-base text-slate-300 sm:text-lg lg:text-xl">
                            Electronics Import, Export &amp; Supply
                        </p>
                    </div>

                    {/* Contact details */}
                    <address className="space-y-4 text-base not-italic text-gray-200 sm:text-lg lg:text-xl">
                        <p>
                            <span className="text-slate-400">Email: </span>
                            <a href={`mailto:${EMAIL}`} className={linkClass}>
                                {EMAIL}
                            </a>
                        </p>
                        <p>
                            <span className="text-slate-400">Phone: </span>
                            <a href={PHONE_LINK} className={linkClass}>
                                {PHONE_DISPLAY}
                            </a>
                        </p>
                        <p>
                            <span className="text-slate-400">Location: </span>
                            <a
                                href={MAPS_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClass}
                            >
                                {ADDRESS_LINES[0]}
                                <br className="sm:hidden" />
                                <span className="hidden sm:inline">, </span>
                                {ADDRESS_LINES[1]}
                            </a>
                        </p>
                    </address>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 lg:mt-14">
                    <p className="text-sm text-slate-400 sm:text-base">
                        &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;