import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Warehouse, Package, Box, Globe, FileCheck, Shield, Truck, MapPin, Timer, Gauge, Thermometer } from "lucide-react";
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
const Warehousing = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <motion.h1 initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Warehousing & 3PL Solutions
                </motion.h1>
                <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1
              }} className="text-lg text-gray-700 mb-6">At GGL India, we offer comprehensive warehousing and third-party logistics (3PL) solutions designed to streamline your supply chain operations. Our services are tailored to meet the diverse needs of businesses, ensuring efficiency, reliability, and scalability.</motion.p>
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }}>
                  <Link to="/contact" className="px-6 py-3 bg-brand-gold hover:bg-amber-400 text-brand-navy font-medium rounded-md shadow-md transition-all">
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5
              }} className="rounded-xl overflow-hidden shadow-xl">
                  <AspectRatio ratio={16 / 9}>
                    <img alt="Warehousing Service" className="w-full h-full object-cover" src="/warehouse2.png" />
                  </AspectRatio>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                Tailored Warehousing Services
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              <ul className="text-gray-700 space-y-4 text-justify">
                <li><strong>General Cargo Storage:</strong> Secure and organized storage solutions for various types of goods.</li>
                <li><strong>Temperature-Controlled Storage:</strong> Specialized facilities for perishable and sensitive items.</li>
                <li><strong>Bonded Warehousing:</strong> Storage solutions that allow goods to be stored without the payment of customs duties until they are released.</li>
              </ul>
            </div>

            {/* Value-Added Services */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                Value-Added Services
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              <ul className="text-gray-700 space-y-4 text-justify">
                <li><strong>Inventory Management:</strong> Real-time tracking and management of stock levels.</li>
                <li><strong>Pick & Pack:</strong> Efficient order fulfilment services to meet customer demands.</li>
                <li><strong>Consolidation & Deconsolidation:</strong> Combining or separating shipments to optimize logistics.</li>
                <li><strong>Order Processing:</strong> Streamlined handling of orders from receipt to dispatch.</li>
              </ul>
            </div>

            {/* Features Grid (icon with title only) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[{
              title: "General Cargo Storage",
              icon: <Box className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Temperature-Controlled Storage",
              icon: <Thermometer className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Bonded Warehousing",
              icon: <Shield className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Inventory Management",
              icon: <Gauge className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Pick & Pack",
              icon: <Package className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Consolidation & Deconsolidation",
              icon: <Warehouse className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Order Processing",
              icon: <FileCheck className="h-5 w-5 text-brand-gold" />
            }, {
              title: "3PL Logistics Integration",
              icon: <Truck className="h-5 w-5 text-brand-gold" />
            }].map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="mb-3 bg-blue-50 p-2 rounded-full inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                </motion.div>)}
            </div>

            {/* CTA */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="bg-gradient-to-r from-brand-navy to-blue-700 rounded-xl text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Ready to Optimize Your Storage?</h3>
              <p className="mb-6 text-blue-50">
                Contact our team today for tailored warehousing solutions.
              </p>
              <Link to="/contact" className="inline-block bg-white text-brand-navy px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Warehousing;