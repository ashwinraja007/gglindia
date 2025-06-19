import React, { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const locations = {
  Chennai: {
    address: "Old No G1, New G3, KAIZEN 2nd & 3rd Floor Plot No, 565Q, G Block, Annanagar East, Chennai, Tamil Nadu 600102",
    phone: "",
    map: "https://www.google.com/maps/embed?..."
  },
  Mumbai: {
    address: "407, MAYURESH PLANET, PLOT NO - 42 & 43, SECTOR-15, CBD BELAPUR NAVI MUMBAI, MAHARASHTRA, 400614",
    phone: "Export: +91 2245174102, Docs: +91 2245174103",
    map: "https://www.google.com/maps/embed?..."
  },
  Delhi: {
    address: "JA 511,DLF Tower A,Jasola District Centre, New Delhi, 110025",
    phone: "+91 9999022030",
    map: "https://www.google.com/maps/embed?..."
  },
  Bangalore: {
    address: "No 2M-216, First Floor, 2nd Main, East Of NGEF Layout, Kasturinagar, Bangalore-560043",
    phone: "+91 9986949743",
    map: "https://www.google.com/maps/embed?..."
  },
  Kolkata: {
    address: "Room No - 29, 4th Floor, 6, Jawaharlal Nehru Rd, Siddha Esplanade, Kolkata, West Bengal 700013",
    phone: "+91 6290921534",
    map: "https://www.google.com/maps/embed?..."
  }
};

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [selectedLocation, setSelectedLocation] = useState("Chennai");
  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[40vh] flex items-center justify-center bg-blue-600 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 opacity-80 z-0" />
          <div className="text-center z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Get in Touch</h1>
            <p className="text-lg font-light">We're here to help and answer any questions you might have.</p>
          </div>
        </motion.section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Select a Location</h2>
              <ul className="space-y-3">
                {Object.keys(locations).map((loc) => (
                  <li key={loc}>
                    <button onClick={() => setSelectedLocation(loc)} className={`block w-full text-left px-4 py-2 rounded-lg transition ${selectedLocation === loc ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-blue-100'}`}>
                      {loc}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{selectedLocation} Office</h2>
              <iframe
                src={locations[selectedLocation].map}
                width="100%"
                height="300"
                className="rounded-lg border"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="mt-4">
                <p className="text-gray-700 font-medium">{locations[selectedLocation].address}</p>
                {locations[selectedLocation].phone && (
                  <p className="mt-2 text-gray-700 font-medium">Phone: {locations[selectedLocation].phone}</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" {...register("firstName")} />
                <Input placeholder="Last Name" {...register("lastName")} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Email" type="email" {...register("email")} />
                <Input placeholder="Phone" {...register("phone")} />
              </div>
              <Input placeholder="Organization/Company" {...register("organization")} />
              <Textarea placeholder="Your Message" className="min-h-[120px]" {...register("message")} />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full text-white bg-blue-700 py-6 flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </Button>
              </motion.div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
