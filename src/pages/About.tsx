import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import {
  Globe,
  Ship,
  Truck,
  Package,
  Clock,
  Shield,
  Users,
  Award,
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6 mt-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-50">
                About <span className="text-slate-50">GGL</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-50">
                Singapore's premier logistics company, offering specialized
                expertise across warehousing, freight forwarding, and
                transportation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-blue-600">About Us</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                GGL is a trusted global leader in <strong>LCL (Less-than-Container Load)</strong> consolidation. We operate across North America, UK, Middle East, Indian Subcontinent, and Southeast Asia, offering world-class groupage services with competitive pricing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-semibold mb-2 text-blue-700">
                    Neutral LCL Consolidation
                  </h4>
                  <p className="text-sm text-gray-700">
                    Confidential and reliable services tailored for freight
                    forwarders and NVOCCs.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-semibold mb-2 text-yellow-700">
                    Advanced Visibility
                  </h4>
                  <p className="text-sm text-gray-700">
                    Real-time tracking through our powerful tech platform.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-semibold mb-2 text-green-700">
                    Strategic Hubs
                  </h4>
                  <p className="text-sm text-gray-700">
                    Singapore, Malaysia, Sri Lanka & Dubai ensure fast, direct
                    connections.
                  </p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-semibold mb-2 text-indigo-700">
                    Comprehensive Services
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Air & Ocean Freight (LCL/FCL)</li>
                    <li>Dangerous Goods Handling</li>
                    <li>Warehousing & 3PL</li>
                    <li>Cross-Border Land Transport</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt="GGL Global Network"
                  className="w-full h-[520px] object-cover"
                  src="/lovable-uploads/41795fb5-562d-45d1-a8d3-f26724bc079b.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating Info Card */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-5 shadow-lg w-64">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      Global Presence
                    </h4>
                    <p className="text-xs text-gray-600">
                      Serving over 50+ countries with direct weekly sailings.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose GGL */}
        <section className="py-20 bg-gray-50 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-yellow-500">GGL?</span>
              </h2>
              <div className="text-xl text-gray-600 max-w-4xl mx-auto text-left">
                <p className="text-base">
                  At GGL, we believe logistics is more than just moving goods — it’s about delivering trust. Our team combines sharp attention to detail with a service-first mindset, ensuring every shipment is handled with care, precision, and efficiency. We pride ourselves on being responsive, proactive, and fully aligned with our clients’ needs. From documentation to delivery, we go the extra mile so you don’t have to.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
