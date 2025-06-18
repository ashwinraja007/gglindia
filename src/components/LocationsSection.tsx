import React, { useState } from "react";
type LocationKey = "Chennai" | "NaviMumbai" | "Delhi" | "Bangalore" | "Kolkata";
const LocationsSection: React.FC = () => {
  const [location, setLocation] = useState<LocationKey>("Chennai");
  const mapIframes: Record<LocationKey, string> = {
    Chennai: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1544442225477!2d80.22267627575678!3d13.089396612283386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52642e68adc059%3A0x44809bfe043deede!2sOrange%20Office%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1750245904624!5m2!1sen!2sin",
    NaviMumbai: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.278191490516!2d73.0301423758366!3d19.007459354119508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c30763eef235%3A0xc2ce8f2ef45e3191!2sMayuresh%20Planet!5e0!3m2!1sen!2sin!4v1750245844656!5m2!1sen!2sin",
    Delhi: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0250426721855!2d77.28670247604325!3d28.538966988322336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59268477019%3A0x3af4293158fb0798!2sDLF%20TOWER%20A!5e0!3m2!1sen!2sin!4v1750245965280!5m2!1sen!2sin",
    Bangalore: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3887.478362374985!2d77.6573394751405!3d13.005180927261943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo%202M-216%2C%20First%20Floor%2C%202nd%20Main%2C%20East%20Of%20NGEF%20Layout%2C%20Kasturinagar%2C%20Bangalore-560043!5e0!3m2!1sen!2sin!4v1750246039245!5m2!1sen!2sin",
    Kolkata: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4000327496638!2d88.34911947590257!3d22.564136933279343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277610a96b977%3A0x114c0a5398a69468!2sMetro%20INOX!5e0!3m2!1sen!2sin!4v1750246121480!5m2!1sen!2sin"
  };
  const locations: {
    key: LocationKey;
    label: string;
    caption: string;
  }[] = [{
    key: "Chennai",
    label: "Chennai",
    caption: "Head Office"
  }, {
    key: "NaviMumbai",
    label: "Navi Mumbai",
    caption: "West India Hub"
  }, {
    key: "Delhi",
    label: "Delhi",
    caption: "North India Office"
  }, {
    key: "Bangalore",
    label: "Bangalore",
    caption: "South Tech Park"
  }, {
    key: "Kolkata",
    label: "Kolkata",
    caption: "East India Office"
  }];
  return <section className="py-12 bg-white relative">
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
        <div className="w-full md:w-[30%] p-6 shadow rounded-lg flex flex-col gap-4 px-0 py-0 bg-slate-100">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Select Location</h3>

          {locations.map(({
          key,
          label,
          caption
        }) => <button key={key} onClick={() => setLocation(key)} className={`p-4 m-2 border rounded text-center flex flex-col items-center transition-all duration-200 ${location === key ? "bg-blue-900 border-blue-950 text-white" : "bg-white border-gray-300 text-gray-800 hover:bg-blue-100"}`}>
              <span className="text-base font-semibold">{label}</span>
              <span className="text-sm">{caption}</span>
            </button>)}
        </div>

        {/* Map */}
        <div className="w-full md:w-[70%] h-[450px] relative shadow-2xl rounded-lg overflow-hidden">
          <iframe src={mapIframes[location]} width="100%" height="100%" style={{
          border: 0
        }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${location} Map`} className="absolute inset-0" />
        </div>
      </div>
    </section>;
};
export default LocationsSection;