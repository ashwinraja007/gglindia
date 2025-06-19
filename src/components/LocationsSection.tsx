import React, { useState } from "react";

type LocationKey = "Chennai" | "NaviMumbai" | "Delhi" | "Bangalore" | "Kolkata";

const LocationsSection: React.FC = () => {
  const [location, setLocation] = useState<LocationKey>("Chennai");

  const mapIframes: Record<LocationKey, string> = {
    Chennai: "https://www.google.com/maps/d/embed?mid=12Rtb_hQeXud-j4o3tW86ldm7Pk8yLk0&ehbc=2E312F&noprof=1",
    NaviMumbai: "https://www.google.com/maps/d/embed?mid=1S_e0QPhCx7XJpSpngt-uoCrhWZQApqw&ehbc=2E312F&noprof=1",
    Delhi: "https://www.google.com/maps/d/embed?mid=1kvFU6arJH18wWA5qi9b2NJ-ci4ExfZA&ehbc=2E312F&noprof=1",
    Bangalore: "https://www.google.com/maps/d/embed?mid=1BB5XPTfJLKxYbhz8G4m8LdKzN5LQi3o&ehbc=2E312F&noprof=1",
    Kolkata: "https://www.google.com/maps/d/embed?mid=1WkGohVbKN6TZsllkoDWeEWF4TV2bQt0&ehbc=2E312F&noprof=1"
  };

  const locations: { key: LocationKey; label: string }[] = [
    { key: "Chennai", label: "Chennai" },
    { key: "NaviMumbai", label: "Navi Mumbai" },
    { key: "Delhi", label: "Delhi" },
    { key: "Bangalore", label: "Bangalore" },
    { key: "Kolkata", label: "Kolkata" }
  ];

  return (
    <section className="py-12 bg-white relative">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 text-gray-800">
            Visit Our Locations
          </h2>
          <p className="text-lg text-gray-600">
            Find us at our convenient office locations across India
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto px-[24px]">
        {/* Tabs */}
        <div className="w-full md:w-[30%] p-6 shadow rounded-lg flex flex-col gap-4 px-0 py-0 bg-slate-50">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Select Location</h3>
          {locations.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setLocation(key)}
              className={`p-4 m-2 border rounded text-center flex flex-col items-center transition-all duration-200 ${
                location === key
                  ? "bg-blue-900 border-blue-950 text-white"
                  : "bg-white border-gray-300 text-gray-800 hover:bg-blue-100"
              }`}
            >
              <span className="text-base font-semibold">{label}</span>
            </button>
          ))}
        </div>

        {/* Map with overlay to hide black header */}
        <div className="w-full md:w-[70%] relative shadow-2xl rounded-lg overflow-hidden h-[480px]">
          {/* Overlay to cover Google My Maps black header */}
          <div className="absolute top-0 left-0 w-full h-[80px] bg-white z-20"></div>

          {/* Optional: your own golden header */}
          <div className="absolute top-0 left-0 w-full text-center font-semibold text-black bg-yellow-400 py-2 z-30">
            GGL - {location} Location
          </div>

          <iframe
            src={mapIframes[location]}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${location} Map`}
            className="absolute top-0 left-0 w-full h-full z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
