import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Plane, Clock, Globe, Headset } from "lucide-react";
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AirFreight = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-brand-navy"
                >
                  Fast, Secure & Reliable <br /> Air Freight Solutions
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-lg md:text-xl text-gray-700 mb-6"
                >
                  Delivering your cargo to global destinations with precision and speed.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Link to="/contact" className="px-6 py-3 bg-brand-gold hover:bg-yellow-400 text-brand-navy font-semibold rounded-full shadow-lg transition-all">
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-xl overflow-hidden shadow-2xl border border-blue-200"
                >
                  <AspectRatio ratio={16 / 9}>
                    <img
                      alt="Air Freight Service"
                      className="w-full h-full object-cover"
                      src="/lovable-uploads/4fca88b2-3d5c-4588-809c-5d8429ca3bfe.png"
                    />
                  </AspectRatio>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                Comprehensive Air Freight Services
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                At GGL India, we provide a full spectrum of air freight services tailored to meet every logistical challenge. Our dedicated teams manage air imports, exports, and urgent shipments on a door-to-door basis.
              </p>
              <p className="text-gray-700 mb-6 text-justify">
                <strong>Global Reach:</strong> With strong networks in Singapore, Malaysia, Sri Lanka, and Dubai, we ensure consistent and timely air cargo delivery to and from India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              {[{
                icon: <Clock className="h-10 w-10 text-brand-gold" />, title: "Time-Definite Deliveries", description: "Flexible delivery windows from next-flight-out to deferred services."
              }, {
                icon: <Plane className="h-10 w-10 text-brand-gold" />, title: "Cargo Consolidation", description: "Smarter cost-saving with consolidated air cargo services."
              }, {
                icon: <Globe className="h-10 w-10 text-brand-gold" />, title: "Specialized Handling", description: "Safe transport of perishables, high-value or sensitive goods."
              }, {
                icon: <Clock className="h-10 w-10 text-brand-gold" />, title: "Real-Time Tracking", description: "Monitor your cargo 24/7 with advanced tracking systems."
              }, {
                icon: <Headset className="h-10 w-10 text-brand-gold" />, title: "Customs Clearance Support", description: "Expertise in documentation, customs, and global compliance."
              }].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 border border-blue-100 rounded-xl p-6 shadow hover:shadow-xl transition duration-300"
                >
                  <div className="mb-4 p-4 rounded-full bg-white shadow inline-block">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-brand-navy rounded-xl text-white p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-2">Need Air Freight Expertise?</h3>
              <p className="mb-6 text-blue-100">
                Reach out to our team and let us craft a reliable solution for you.
              </p>
              <Link
                to="/contact"
                className="bg-white text-brand-navy px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AirFreight;
