import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LCLConsolidation = () => {
  const lclServices = [
    "Collecting smaller shipments from multiple clients",
    "Combining them into a single container at origin",
    "Managing customs clearance and documentation",
    "Ensuring secure and timely deconsolidation and final delivery",
    "Real-time tracking and shipment visibility",
    "Competitive pricing for cost-effective solutions"
  ];

  const globalHubs = [
    "Singapore",
    "Malaysia",
    "Sri Lanka",
    "Dubai",
    "Mumbai (India)",
    "Chennai (India)"
  ];

  const handlingSteps = [
    {
      title: "1. Cargo Collection & Preparation",
      description: "We collect your goods from your location and prepare them for consolidation, including proper labelling, packaging, and documentation."
    },
    {
      title: "2. Consolidation at Our Facilities",
      description: "Your cargo is consolidated with other shipments at our facilities in Mumbai, Chennai, and key cities—optimizing space and minimizing costs."
    },
    {
      title: "3. Sea Freight Shipping",
      description: "Once consolidated, your cargo is shipped via sea freight to major ports worldwide through regular, timely sailings."
    },
    {
      title: "4. Deconsolidation & Final Delivery",
      description: "Upon arrival, we deconsolidate your cargo and handle the final-mile delivery to your specified location."
    }
  ];

  const whyChooseUs = [
    "Cost Efficiency: Share container space and reduce shipping costs.",
    "Flexibility: Ship smaller quantities without waiting to fill a full container.",
    "Global Reach: Access major ports worldwide through our extensive network.",
    "Expert Handling: Experienced team ensuring safe and timely delivery."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                >
                  LCL Consolidation Services
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-700 mb-6"
                >
                  Cost-effective consolidation solutions for your smaller shipments
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link to="/contact" className="px-6 py-3 bg-brand-gold hover:bg-amber-400 text-brand-navy font-medium rounded-md shadow-md transition-all">
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl overflow-hidden shadow-xl"
                >
                  <AspectRatio ratio={16 / 9}>
                    <img alt="LCL Consolidation Service" className="w-full h-full object-cover" src="/lovable-uploads/lcl.png" />
                  </AspectRatio>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                Professional LCL Consolidation Services
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              <p className="text-gray-700 mb-6 text-justify">
                GGL is a leading LCL consolidator with a strong global footprint, offering reliable groupage services across key trade lanes including North America, the UK, the Middle East, Southeast Asia, and the Far East.
              </p>
              <p className="text-gray-700 mb-6 text-justify">
                With prime transshipment hubs in Singapore, Malaysia, Sri Lanka, and Dubai, GGL provides fast, flexible, and cost-effective consolidation services. We now expand our reach in India starting with Mumbai, and soon in Chennai, New Delhi, Pune, and Bangalore.
              </p>
            </div>

            {/* GGL's Role & Hubs */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6 mb-16 rounded-2xl">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                  <h3 className="text-2xl mb-6 text-yellow-500 font-bold">GGL's Role in LCL Consolidation:</h3>
                  <div className="space-y-4 mb-8">
                    {lclServices.map((item, index) => (
                      <motion.div key={index} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }}>
                        <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></div>
                        <span className="text-blue-100">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg text-blue-100 leading-relaxed">With our strategic global hub network and advanced tracking systems, we provide reliable, transparent, and economical LCL solutions tailored to your supply chain needs.</p>
                  <p className="text-lg text-yellow-500 leading-relaxed font-bold my-[20px]">At GGL, we don't just move freight — we move businesses forward.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                    <h3 className="text-2xl font-semibold mb-6 text-slate-50">Global Hub Network</h3>
                    <div className="space-y-4">
                      {globalHubs.map((hub, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                          <span className="font-medium">{hub}</span>
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Handling Steps */}
            <div className="max-w-6xl mx-auto mb-20">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">How GGL India Handles LCL Consolidation</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                {handlingSteps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} viewport={{ once: true }} className="bg-white shadow-md rounded-xl p-6 border-t-4 border-brand-gold">
                    <h4 className="font-bold mb-2 text-brand-navy">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-blue-50 rounded-xl p-10 mb-20">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Why Choose GGL India for LCL Consolidation?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {whyChooseUs.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-brand-gold rounded-full mt-2" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="bg-gradient-to-r from-brand-navy to-blue-700 rounded-xl text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Ready to Consolidate Your Shipments?</h3>
              <p className="mb-6 text-blue-50">Contact our team today for tailored LCL consolidation solutions.</p>
              <Link to="/contact" className="inline-block bg-white text-brand-navy px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
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

export default LCLConsolidation;
