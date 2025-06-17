import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, Ship, Truck, Package, Clock, Shield, Target, Users,
  Award, CheckCircle, ArrowRight
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6 mt-16">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold mb-4 text-slate-50"
            >
              About <span className="text-yellow-400">GGL</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100"
            >
              Singapore's premier logistics partner with end-to-end expertise in freight, warehousing, and global transport.
            </motion.p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 leading-tight">
                Global Reach, Local Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                GGL is a trusted leader in <strong>LCL (Less-than-Container Load) consolidation</strong> with strong roots across <strong>North America, UK, Middle East, Indian Subcontinent, and Southeast Asia.</strong>
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We run <strong>direct weekly sailings</strong> from hubs like <span className="text-blue-600">Singapore, Malaysia, Sri Lanka, and Dubai</span>—ensuring cost-effective and reliable logistics.
              </p>
              <p className="text-lg text-gray-700">
                Backed by advanced tech, we deliver <span className="font-medium">real-time tracking and visibility</span> for unmatched transparency and control.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl relative">
                <img
                  src="/lovable-uploads/41795fb5-562d-45d1-a8d3-f26724bc079b.png"
                  alt="GGL Global Logistics"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-white p-4 rounded-tr-xl shadow-md">
                  <div className="flex items-center gap-2">
                    <Globe className="text-blue-600 w-6 h-6" />
                    <span className="text-sm font-medium text-gray-700">Operating in 50+ Countries</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Neutral Consolidation */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Neutral Consolidation Solutions
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed text-justify mb-6">
              Our <strong>neutral LCL consolidation</strong> is tailor-made for freight forwarders, custom brokers, and 3PL providers. We do not compete—we empower your services with confidentiality and efficiency.
            </p>
            <div className="text-gray-700">
              <h4 className="font-semibold mb-2">Key Offerings:</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>Air & Ocean Freight (LCL & FCL)</li>
                <li>Dangerous Goods Handling</li>
                <li>Warehousing, Distribution & 3PL</li>
                <li>Domestic & Cross-Border Land Transport</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who It’s For */}
        <section className="bg-blue-50 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Who Is It For?</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Freight Forwarders</li>
              <li>Custom Brokers</li>
              <li>NVOCCs</li>
              <li>3PL Providers</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
