import React, { useState, useEffect } from 'react';
import { Users, UserCircle, SearchCode, Ship, Calendar, Globe } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomerPortalOpen, setIsCustomerPortalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderImages = ['/hom1.png'];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  /* ----------------------------------------------
      UPDATED → POPUP NOW TRIGGERS ON PARTNER PORTAL
  ---------------------------------------------- */
  const portalLinks = [
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Consolmate',
      description: 'Access shipping dashboard',
      url: 'https://consolmate.com/auth/login/15',
      external: true,          // ← Consolmate is now normal link
    },
    {
      icon: <UserCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Partner Portal',
      description: 'Manage partnership',
      onClick: () => setIsCustomerPortalOpen(true), // ← POPUP MOVED HERE
    },
    {
      icon: <SearchCode className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Tracking',
      description: 'Track your shipment',
      url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:262',
      external: true,
    },
    {
      icon: <Ship className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Sailing Schedule',
      description: 'View schedules',
      url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:262',
      external: true,
    },
    {
      icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Online Quote',
      description: 'Request a quote',
      url: '/contact',
      external: false,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-8 md:pt-16">
      {/* BACKGROUND AND CONTENT SECTION REMAINS SAME */}

      {/* PORTAL BUTTONS */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-[10] px-2 sm:px-4">
        <div
          className={`max-w-7xl mx-auto transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-white/0 p-3 sm:p-4 my-[31px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
              {portalLinks.map((link, index) => (
                <div key={index} className="flex flex-col items-center">
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="w-full h-12 sm:h-14 md:h-16 flex flex-col gap-1 items-center justify-center
                                 text-xs sm:text-sm bg-white/90 hover:bg-white
                                 text-gray-800 hover:text-blue-900
                                 transition-all duration-300 rounded-lg
                                 shadow-sm hover:shadow-md hover:scale-105">
                      {link.icon}
                      <span className="font-medium leading-none">{link.title}</span>
                    </button>
                  ) : link.external ? (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="w-full">
                      <button
                        className="w-full h-12 sm:h-14 md:h-16 flex flex-col gap-1 items-center justify-center
                                   text-xs sm:text-sm bg-white/90 hover:bg-white
                                   text-gray-800 hover:text-blue-900
                                   transition-all duration-300 rounded-lg
                                   shadow-sm hover:shadow-md hover:scale-105">
                        {link.icon}
                        <span className="font-medium leading-none">{link.title}</span>
                      </button>
                    </a>
                  ) : (
                    <a href={link.url} className="w-full">
                      <button className="w-full h-12 sm:h-14 md:h-16 flex flex-col gap-1 items-center justify-center
                                         text-xs sm:text-sm bg-white/90 hover:bg-white
                                         text-gray-800 hover:text-blue-900
                                         transition-all duration-300 rounded-lg
                                         shadow-sm hover:shadow-md hover:scale-105">
                        {link.icon}
                        <span className="font-medium leading-none">{link.title}</span>
                      </button>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* POPUP MODAL (unchanged) */}
      {isCustomerPortalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[50] flex items-center justify-center p-4">
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

              <div className="space-y-5">
                <h3 className="font-semibold text-gray-800 text-lg">Tutorial Videos</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { src: '/partnerportal.mp4', label: 'Getting Started' },
                    { src: '/customerportal.mp4', label: 'Advanced Features' },
                  ].map((video, i) => (
                    <div key={i} className="border rounded-xl overflow-hidden bg-gray-50">
                      <div className="aspect-video">
                        <video controls className="w-full h-full object-cover bg-black">
                          <source src={video.src} type="video/mp4" />
                        </video>
                      </div>
                      <div className="p-3 bg-gray-50 text-sm font-medium text-gray-800">
                        {video.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-4">
                <button
                  onClick={() => setIsCustomerPortalOpen(false)}
                  className="px-5 py-2.5 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
                  Cancel
                </button>

                <a href="https://pp.onlinetracking.co/auth/login/15" target="_blank">
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
