import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Globe, Ship, Truck, Package, Clock, Shield, Users, Award } from 'lucide-react';

const About: React.FC = () => {
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
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About <span className="text-yellow-400">GGL</span>
            </motion.h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto">
              GGL is a trusted global leader in LCL (Less-than-Container Load) consolidation.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-blue-900">ABOUT US</h2>
              <p className="text-gray-700 text-lg">
                GGL is a trusted global leader in LCL (Less-than-Container Load) consolidation. With a robust presence across North America, the UK, the Middle East, the Indian Subcontinent, Southeast Asia, and the Far East, we offer streamlined groupage services backed by strong customer support and competitive pricing.
              </p>
              <p className="text-gray-700 text-lg">
                Strategically positioned in major transshipment hubs like Singapore, Malaysia, Sri Lanka, and Dubai, GGL operates direct weekly sailings to key global ports. Our expansive network ensures fast, reliable, and cost-effective consolidation options for freight forwarders and logistics providers.
              </p>
              <p className="text-gray-700 text-lg">
                One of our standout services is neutral LCL consolidation, designed specifically for freight forwarders and NVOCCs who require confidential, reliable, and competitive groupage solutions. As a neutral consolidator, GGL India does not compete with freight forwarders but instead partners with them to provide secure, transparent services that help optimize their global reach and cost efficiency.
              </p>
            </motion.div>

            {/* Services List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Services Include:</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li>Air & Ocean Freight (LCL & FCL)</li>
                <li>Dangerous Goods Handling</li>
                <li>Warehousing, Distribution & 3PL</li>
                <li>Domestic & Cross-Border Land Transport</li>
              </ul>
            </motion.div>

            {/* Technology Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 text-lg">
                Our advanced technology platform offers end-to-end shipment visibility, allowing clients to track and manage their cargo with precision. With a team of logistics professionals and a trusted global network, GGL India stands as a dependable partner committed to neutrality, excellence, and customer success.
              </p>
            </motion.div>

            {/* Who Is It For */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Who is it for? (Neutral consolidation)</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li>Freight Forwarders</li>
                <li>Custom Brokers</li>
                <li>NVOCCs</li>
                <li>3PL Providers</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
