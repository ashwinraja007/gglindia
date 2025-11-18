import React, { useState, useEffect } from "react";
import { Users, UserCircle, SearchCode, Ship, Calendar, Globe } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomerPortalOpen, setIsCustomerPortalOpen] = useState(false);

  const sliderImages = ["/hom1.png"]; // only one image

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Consolmate = normal link
  // Partner Portal = popup
  const portalLinks = [
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Consolmate",
      description: "Access shipping dashboard",
      url: "https://consolmate.com/auth/login/15",
      external: true,
    },
    {
      icon: <UserCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Partner Portal",
      description: "Manage partnership",
      onClick: () => setIsCustomerPortalOpen(true),
    },
    {
      icon: <SearchCode className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Tracking",
      description: "Track your shipment",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:262",
      external: true,
    },
    {
      icon: <Ship className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Sailing Schedule",
      description: "View schedules",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:262",
      external: true,
    },
    {
      icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Online Quote",
      description: "Request a quote",
      url: "/contact",
      external: false,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-8 md:pt-16">

      {/* ALWAYS VISIBLE BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hom1.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />

      {/* MAIN HERO CONTENT */}
      <div className="relative z-[10] flex items-center h-[75vh] px-6">
        <div
          className={`max-w-2xl space-y-5 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="text-yellow-500 animate-spin-slow">
              <Globe className="w-8 h-8 drop-shadow-[0_0_8px_rgba(246,177,0,0.8)]" />
            </div>
            <span className="bg-yellow-500/20 text-white px-4 py-1.5 rounded-full text-sm border border-yellow-500/30">
              Beyond Logistics, a Complete Solution
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Delivering Excellence in{" "}
            <span className="text-yellow-500">Global Logistics</span> Solutions
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-xl">
            GGL brings over 25 years of expertise in international logistics,
            offering comprehensive solutions tailored to your business needs.
          </p>
        </div>
      </div>

      {/* PORTAL BUTTON GRID */}
      <div className="absolute bottom-6 left-0 right-0 z-[10] px-4">
        <div
          className={`max-w-7xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {portalLinks.map((link, i) => (
              <div key={i}>
                {link.onClick ? (
                  <button
                    onClick={link.onClick}
                    className="w-full h-14 md:h-16 flex flex-col items-center justify-center bg-white/90 hover:bg-white text-gray-800 hover:text-blue-900 rounded-lg shadow-sm hover:shadow-lg transition-all hover:scale-105"
                  >
                    {link.icon}
                    <span className="text-sm font-medium">{link.title}</span>
                  </button>
                ) : link.external ? (
                  <a href={link.url} target="_blank" className="w-full block">
                    <button className="w-full h-14 md:h-16 flex flex-col items-center justify-center bg-white/90 hover:bg-white text-gray-800 hover:text-blue-900 rounded-lg shadow-sm hover:shadow-lg transition-all hover:scale-105">
                      {link.icon}
                      <span className="text-sm font-medium">{link.title}</span>
                    </button>
                  </a>
                ) : (
                  <a href={link.url} className="w-full block">
                    <button className="w-full h-14 md:h-16 flex flex-col items-center justify-center bg-white/90 hover:bg-white text-gray-800 hover:text-blue-900 rounded-lg shadow-sm hover:shadow-lg transition-all hover:scale-105">
                      {link.icon}
                      <span className="text-sm font-medium">{link.title}</span>
                    </button>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PARTNER PORTAL POPUP */}
      {isCustomerPortalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[50] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-blue-900">Partner Portal</h2>
                <button
                  onClick={() => setIsCustomerPortalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Tutorial Videos
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { src: "/partnerportal.mp4", label: "Getting Started" },
                  { src: "/customerportal.mp4", label: "Advanced Features" },
                ].map((video, i) => (
                  <div key={i} className="border rounded-xl overflow-hidden bg-gray-50">
                    <div className="aspect-video">
                      <video controls className="w-full h-full object-cover bg-black">
                        <source src={video.src} type="video/mp4" />
                      </video>
                    </div>
                    <div className="p-3 bg-gray-50 text-sm font-medium">{video.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end gap-4">
                <button
                  onClick={() => setIsCustomerPortalOpen(false)}
                  className="px-5 py-2.5 bg-gray-300 text-gray-700 rounded-md"
                >
                  Cancel
                </button>
                <a
                  href="https://pp.onlinetracking.co/auth/login/15"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Login
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
