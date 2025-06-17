import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Ship, Truck, Package, Clock, Shield, Target, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "500+", label: "Global Partners", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "99%", label: "On-Time Delivery", icon: Award }
  ];

  const services = [
    { icon: Ship, title: "Ocean Freight", description: "Comprehensive sea freight solutions with global coverage" },
    { icon: Package, title: "Air Freight", description: "Fast and reliable air cargo services worldwide" },
    { icon: Truck, title: "Land Transport", description: "Efficient ground transportation and last-mile delivery" },
    { icon: Shield, title: "Warehousing", description: "Secure storage and inventory management solutions" }
  ];

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
                Singapore's premier logistics company, offering specialized expertise across warehousing, freight forwarding, and transportation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main About Content */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  <span className="text-blue-600">About Us</span>
                </h2>

                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p className="text-base">
                    GGL is a trusted global leader in LCL (Less-than-Container Load) consolidation. With a robust presence across North America, the UK, the Middle East, the Indian Subcontinent, Southeast Asia, and the Far East, we offer streamlined groupage services backed by strong customer support and competitive pricing.
                  </p>
                  <p className="text-base">
                    We are Strategically positioned in major transshipment hubs like Singapore, Malaysia, Sri Lanka, and Dubai, GGL operates direct weekly sailings to key global ports. Our expansive network ensures fast, reliable, and cost-effective consolidation options for freight forwarders and logistics providers.
                  </p>
                  <p className="text-base">
                    One of our standout services is neutral LCL consolidation, designed specifically for freight forwarders and NVOCCs who require confidential, reliable, and competitive groupage solutions. As a neutral consolidator, GGL India does not compete with freight forwarders but instead partners with them to provide secure, transparent services that help optimize their global reach and cost efficiency.
                  </p>
                  <p className="text-base">
                    In addition to neutral consolidation, we offer a wide portfolio of logistics services, including:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Air & Ocean Freight (LCL & FCL)</li>
                      <li>Dangerous Goods Handling</li>
                      <li>Warehousing, Distribution & 3PL</li>
                      <li>Domestic & Cross-Border Land Transport</li>
                    </ul>
                  </p>
                  <p className="text-base">
                    Our advanced technology platform offers end-to-end shipment visibility, allowing clients to track and manage their cargo with precision. With a team of logistics professionals and a trusted global network, GGL India stands as a dependable partner committed to neutrality, excellence, and customer success.
                  </p>
                  <p className="text-base">
                    <strong>Who is it for? (Neutral consolidation)</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Freight Forwarders</li>
                      <li>Custom Brokers</li>
                      <li>NVOCCs</li>
                      <li>3PL Providers</li>
                    </ul>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img alt="GGL Global Logistics" className="w-full h-[500px] object-cover" src="/lovable-uploads/41795fb5-562d-45d1-a8d3-f26724bc079b.png" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent my-0"></div>
                </div>

                {/* Floating cards */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Network</h4>
                      <p className="text-sm text-gray-600">50+ countries worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose GGL Section */}
        <section className="py-20 bg-white px-6">
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
              <div className="text-xl text-gray-600 max-w-4xl mx-auto space-y-6 text-left">
                <p className="text-base my-0">
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
