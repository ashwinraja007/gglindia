import React, { useState, useEffect, useRef } from 'react';
import { Users, UserCircle, SearchCode, Ship, Calendar, Globe } from 'lucide-react';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomerPortalOpen, setIsCustomerPortalOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-scrolling images for the carousel
  const carouselImages = ['/import.png', '/Export.png'];
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll for the image carousel (only when video is not showing)
  useEffect(() => {
    if (!showVideo) {
      const imageInterval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % carouselImages.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(imageInterval);
    }
  }, [showVideo, carouselImages.length]);

  // Handle video end
  const handleVideoEnd = () => {
    setShowVideo(false);
  };
  const portalLinks = [{
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: 'Customer Portal',
    description: 'Access shipping dashboard',
    onClick: () => setIsCustomerPortalOpen(true)
  }, {
    icon: <UserCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: 'Partner Portal',
    description: 'Manage partnership',
    url: 'https://pp.onlinetracking.co/auth/login/3',
    external: true
  }, {
    icon: <SearchCode className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: 'Tracking',
    description: 'Track your shipment',
    url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:59',
    external: true
  }, {
    icon: <Ship className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: 'Sailing Schedule',
    description: 'View schedules',
    url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:59',
    external: true
  }, {
    icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: 'Online Quote',
    description: 'Request a quote',
    url: '/contact',
    external: false
  }];
  return <section className="relative min-h-screen overflow-hidden pt-8 md:pt-16">
      {/* Video or Image Background - Full Coverage */}
      <div className="absolute inset-0 z-[1]">
        {showVideo ? <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted onEnded={handleVideoEnd}>
            <source src="/earth2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> : <>
            {carouselImages.map((image, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <img src={image} alt={`Global Logistics Network ${index + 1}`} loading="lazy" className="w-full h-full object-none" />
              </div>)}
            
            {/* Image indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {carouselImages.map((_, index) => <div key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-brand-gold' : 'bg-white/50'}`} />)}
            </div>
          </>}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-[3] my-0 mx-[43px]">
        
      </div>

      {/* Customer Portal Modal */}
      {isCustomerPortalOpen && <div className="fixed inset-0 bg-black/50 z-[50] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-blue-900">Customer Portal</h2>
                <button onClick={() => setIsCustomerPortalOpen(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-800">Tutorial Videos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[{
                src: '/GGL_demo1.mp4',
                label: 'Getting Started'
              }, {
                src: '/GGL_promo.mp4',
                label: 'Advanced Features'
              }].map((video, i) => <div key={i} className="border rounded-lg overflow-hidden">
                      <div className="aspect-video">
                        <video controls className="w-full h-full object-cover">
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="p-2 bg-gray-50 text-sm font-medium">{video.label}</div>
                    </div>)}
                </div>
              </div>

              {/* Button Section */}
              <div className="mt-6 flex justify-end gap-4">
                <button onClick={() => setIsCustomerPortalOpen(false)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
                  Cancel
                </button>
                <a href="https://cp.onlinetracking.co/#/login/3" target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Login
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>}
    </section>;
};
export default Hero;
