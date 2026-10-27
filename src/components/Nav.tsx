import React, { useEffect, useState } from "react";

type NavLink = { label: string; href: string };

const NAV_LINKS: NavLink[] = [
    { label: "About", href: "#about" },
    { label: "Business", href: "#business" },
    { label: "Products", href: "#products" },
    { label: "Approach", href: "#approach" },
   
];

const CONTACT_HREF = "#contact";

type LogoMarkProps = { light: boolean };

// light = true  -> white tile, navy "A" (used on the dark navy bar)
// light = false -> navy tile, white "A" (used on the white bar)
const LogoMark: React.FC<LogoMarkProps> = ({ light }) => (
    <svg width="56" height="56" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
        <rect width="64" height="64" rx="14" fill={light ? "#FFFFFF" : "#0F2744"} />
        <path
            d="M17 48 L32 15 L47 48"
            fill="none"
            stroke={light ? "#0F2744" : "#FFFFFF"}
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M22 38 H42" fill="none" stroke="#F29A4A" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
);

const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    // Switch to the white bar once the page has scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close the mobile menu on Escape
    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    // Close the mobile menu when the viewport grows to desktop size
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const onChange = (e: MediaQueryListEvent) => {
            if (e.matches) setMenuOpen(false);
        };
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    // Colors that change between the navy bar (top) and the white bar (scrolled)
    const headerClass = scrolled
        ? "bg-white shadow-[0_8px_24px_-12px_rgba(15,39,68,0.25)]"
        : "bg-[#0B1D36]/95 backdrop-blur-md";
    const nameClass = scrolled ? "text-[#0F2744]" : "text-white";
    const taglineClass = scrolled ? "text-[#4A6285]" : "text-[#A9BDD8]";
    const linkClass = scrolled
        ? "text-[#3D5273] hover:text-[#0F2744] focus-visible:text-[#0F2744]"
        : "text-[#C5D3E8] hover:text-white focus-visible:text-white";
    const contactClass = scrolled
        ? "border-[#0F2744] bg-[#0F2744] text-white hover:bg-[#17375F] focus-visible:ring-[#0F2744]"
        : "border-[#7F9CC4] text-white hover:bg-white hover:text-[#0F2744] focus-visible:ring-white";
    const burgerStroke = scrolled ? "#0F2744" : "#FFFFFF";
    const burgerRing = scrolled ? "focus-visible:ring-[#0F2744]" : "focus-visible:ring-white";
    const mobilePanelClass = scrolled ? "bg-white border-[#0F2744]/10" : "bg-[#0B1D36] border-white/10";
    const mobileLinkClass = scrolled ? "text-[#3D5273] hover:text-[#0F2744]" : "text-[#C5D3E8] hover:text-white";
    const mobileCtaClass = scrolled ? "bg-[#0F2744] text-white" : "bg-white text-[#0F2744]";

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 font-['Roboto',system-ui,sans-serif] transition-[background-color,box-shadow] duration-300 ${headerClass}`}
        >
            {/* Full width: logo hugs the left edge, links hug the right edge */}
            <div className="flex h-20 w-full items-center justify-between gap-6 px-6 lg:h-24 lg:px-10">
                {/* Brand */}
                <a href="#top" className="flex items-center gap-4" onClick={closeMenu} aria-label="ANSCOUKF home">
                    <LogoMark light={!scrolled} />
                    <span className="flex flex-col gap-1">
                        <span
                            className={`text-[20px] font-medium leading-[1.1] tracking-[0.01em] transition-colors duration-300 lg:text-[22px] ${nameClass}`}
                        >
                            ANSCOUKF
                        </span>
                        <span
                            className={`text-[11px] font-normal uppercase leading-[1.2] tracking-[0.06em] transition-colors duration-300 lg:text-[13px] ${taglineClass}`}
                        >
                            Electronics Import &amp; Export
                        </span>
                    </span>
                </a>

                {/* Desktop links */}
                <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-base font-medium transition-colors focus-visible:outline-none ${linkClass}`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={CONTACT_HREF}
                        className={`flex h-11 items-center rounded-xl border-[1.5px] px-5.5 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 ${contactClass}`}
                    >
                        Contact Us
                    </a>
                </nav>

                {/* Mobile menu button */}
                <button
                    type="button"
                    className={`flex h-11 w-11 items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 lg:hidden ${burgerRing}`}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={burgerStroke}
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden="true"
                    >
                        {menuOpen ? <path d="M6 6 L18 18 M18 6 L6 18" /> : <path d="M4 8h16M4 16h10" />}
                    </svg>
                </button>
            </div>

            {/* Mobile dropdown */}
            <div
                id="mobile-menu"
                className={`overflow-hidden transition-[max-height,background-color] duration-300 lg:hidden ${mobilePanelClass} ${
                    menuOpen ? "max-h-96 border-t" : "max-h-0"
                }`}
            >
                <nav aria-label="Mobile" className="mx-auto flex max-w-300 flex-col gap-1 px-6 py-4">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            tabIndex={menuOpen ? 0 : -1}
                            className={`flex h-12 items-center text-lg font-medium ${mobileLinkClass}`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={CONTACT_HREF}
                        onClick={closeMenu}
                        tabIndex={menuOpen ? 0 : -1}
                        className={`mt-2 flex h-12 items-center justify-center rounded-xl text-base font-medium ${mobileCtaClass}`}
                    >
                        Contact Us
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;