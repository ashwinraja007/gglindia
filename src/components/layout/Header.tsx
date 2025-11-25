import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Linkedin, Facebook } from "lucide-react";
import CountrySelector from "../common/CountrySelector";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Detect if user is inside Bangladesh section
  const isBangladesh = location.pathname.startsWith("/bangladesh");
  const base = isBangladesh ? "/bangladesh" : "";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const infoRef = useRef(null);

  // Sticky scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close Info Dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (infoRef.current && !(infoRef.current as any).contains(e.target)) {
        setIsInfoOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigation handler
  const handleNavClick = (path: string, scrollToId?: string) => {
    path = `${base}${path}`; // prepend Bangladesh prefix automatically
    setIsMobileMenuOpen(false);

    if (location.pathname === path && scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
      setTimeout(() => {
        if (scrollToId) {
          const el = document.getElementById(scrollToId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }
  };

  const handleLogoClick = () => {
    navigate(isBangladesh ? "/bangladesh" : "/");
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white py-2 shadow-md" : "bg-white/95 py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src="/lovable-uploads/GGL.png"
              alt="GGL Logo"
              onClick={handleLogoClick}
              className="h-16 w-auto cursor-pointer transition-all"
            />
            <div className="h-8 w-px bg-gray-200 hidden md:block" />

            <a
              href="https://1ge.sg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit 1 Global Enterprises Website"
            >
              <img
                src="/1GlobalEnterprises.png"
                alt="1 Global Enterprises Logo"
                className="hidden md:block h-10 w-auto object-contain transition-all"
              />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex gap-6 items-center relative">
            {/* HOME */}
            <button
              onClick={() => handleNavClick("")}
              className={`text-gray-800 hover:text-brand-gold font-medium ${
                location.pathname === `${base}/` ? "text-brand-gold" : ""
              }`}
            >
              Home
            </button>

            {/* INFO DROPDOWN */}
            <div className="relative" ref={infoRef}>
              <button
                onClick={() => setIsInfoOpen(!isInfoOpen)}
                className={`text-gray-800 hover:text-brand-gold font-medium ${
                  [`${base}/about`, `${base}/careers`].includes(location.pathname)
                    ? "text-brand-gold"
                    : ""
                }`}
              >
                Info
              </button>

              {isInfoOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md z-50 min-w-[160px]">
                  <button
                    onClick={() => {
                      handleNavClick("/about");
                      setIsInfoOpen(false);
                    }}
                    className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => {
                      handleNavClick("/careers");
                      setIsInfoOpen(false);
                    }}
                    className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                  >
                    Careers
                  </button>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <button
              onClick={() => handleNavClick("/services")}
              className={`text-gray-800 hover:text-brand-gold font-medium ${
                location.pathname.includes(`${base}/services`)
                  ? "text-brand-gold"
                  : ""
              }`}
            >
              Services
            </button>

            {/* GLOBAL PRESENCE */}
            <button
              onClick={() => handleNavClick("/global-presence")}
              className={`text-gray-800 hover:text-brand-gold font-medium ${
                location.pathname === `${base}/global-presence`
                  ? "text-brand-gold"
                  : ""
              }`}
            >
              Global Presence
            </button>

            {/* e-KYC */}
            <button
              onClick={() => handleNavClick("/kyc-details")}
              className="text-gray-800 hover:text-brand-gold font-medium"
            >
              e-KYC
            </button>

            <CountrySelector />

            {/* CONTACT */}
            <button
              onClick={() => handleNavClick("/contact", "contact-form")}
              className="px-5 py-2 bg-[#F6B100] text-black rounded-full hover:bg-[#FFCC33] font-medium"
            >
              Contact / Quote
            </button>
          </nav>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`${
            isMobileMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          } md:hidden overflow-hidden transition-all duration-300`}
        >
          <nav className="flex flex-col gap-4 border-t mt-4 border-gray-100">

            <button onClick={() => handleNavClick("")} className="text-gray-800 font-medium">
              Home
            </button>

            <button onClick={() => handleNavClick("/about")} className="text-gray-800 font-medium">
              About Us
            </button>

            <button onClick={() => handleNavClick("/services")} className="text-gray-800 font-medium">
              Services
            </button>

            <button onClick={() => handleNavClick("/careers")} className="text-gray-800 font-medium">
              Careers
            </button>

            <button onClick={() => handleNavClick("/global-presence")} className="text-gray-800 font-medium">
              Global Presence
            </button>

            <button onClick={() => handleNavClick("/contact")} className="text-gray-800 font-medium">
              Contact Us
            </button>

            <div className="flex items-center gap-4 py-2">
              <a href="https://www.linkedin.com/company/gglus/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="text-gray-600" />
              </a>
              <a href="https://www.facebook.com/gglusa" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} className="text-gray-600" />
              </a>
            </div>

            <CountrySelector />

            <button
              onClick={() => handleNavClick("/contact", "contact-form")}
              className="px-4 py-2 bg-brand-gold rounded-md text-black font-medium"
            >
              Get A Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
