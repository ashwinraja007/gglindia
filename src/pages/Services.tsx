import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Plane, Ship, Truck, Warehouse } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const ServiceCard = ({ icon, title, description, image, link }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 overflow-hidden border border-gray-100">
      <div className="relative h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-start p-3">
          <div className="bg-brand-gold text-brand-navy p-2 rounded-full">{icon}</div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-md font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{description}</p>
        <Link to={link} className="text-brand-gold text-sm font-medium inline-flex items-center hover:text-amber-600">
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const isMobile = useIsMobile();
  const services = [
    {
      id: 1,
      icon: <Ship className="w-4 h-4" />,
      title: "Ocean Freight",
      image: "/oceanf.png",
      description: "Comprehensive ocean freight services for seamless global shipping.",
      link: "/services/ocean-freight"
    },
    {
      id: 2,
      icon: <Warehouse className="w-4 h-4" />,
      title: "LCL Consolidation",
      image: "/hom4.png",
      description: "We collect your goods and prepare them for consolidation with proper documentation.",
      link: "/services/lcl-consolidation"
    },
    {
      id: 3,
      icon: <Truck className="w-4 h-4" />,
      title: "Transportation",
      image: "/hom3.png",
      description: "Efficient and reliable transportation for seamless logistics.",
      link: "/services/transportation"
    },
    {
      id: 4,
      icon: <Warehouse className="w-4 h-4" />,
      title: "Warehousing",
      image: "/warehosing.png",
      description: "Full-service warehousing and 3PL solutions for scalable operations.",
      link: "/services/warehousing"
    },
    {
      id: 5,
      icon: <Plane className="w-4 h-4" />,
      title: "Air Freight",
      image: "/cargoplane3.png",
      description: "Flexible air freight solutions tailored to your needs.",
      link: "/services/air-freight"
    },
    {
      id: 6,
      icon: <Warehouse className="w-4 h-4" />,
      title: "Project Cargo",
      image: "/projectcargo3.png",
      description: "End-to-end logistics for heavy and oversized shipments.",
      link: "/services/project-cargo"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        <section className="bg-gradient-to-r from-gray-900 to-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/lovable-uploads/gp.jpg" alt="Services" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-brand-navy opacity-90" />
          </div>

          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Logistics Services</h1>
              <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                From air and ocean freight to transportation, we deliver logistics excellence.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">All Services</h2>
              <div className="w-20 h-1 bg-brand-gold mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our tailored freight and logistics services designed for every business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(service => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">Why Choose Our Logistics Services?</h2>
              <div className="w-20 h-1 bg-brand-gold mx-auto mb-3"></div>
              <p className="text-gray-700">
                We combine expertise, tech, and personalized service to deliver outstanding results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "🌍 Global Network", description: "Extensive global connections for efficient shipping." },
                { title: "🎯 Customized Solutions", description: "Tailored logistics plans just for your business." },
                { title: "📡 Advanced Tech", description: "Real-time tracking with modern logistics software." },
                { title: "👨‍✈️ Expert Team", description: "Veteran professionals ensuring smooth operations." },
                { title: "✅ Compliance", description: "Always up-to-date with international regulations." },
                { title: "📞 24/7 Support", description: "Always available customer service for your needs." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-brand-gold"
                >
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="shadow-md">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
