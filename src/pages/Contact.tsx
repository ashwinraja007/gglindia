import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
const Contact = () => {
  const {
    register,
    handleSubmit
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return <div className="min-h-screen flex flex-col relative">
      <Header />

      <main className="flex-grow">
        <motion.section initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="relative h-[40vh] flex items-center justify-center bg-blue-600 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-800/50" />
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.2,
          duration: 0.8
        }} className="text-center px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Get in Touch</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-light">
              We're here to help and answer any questions you might have.
            </p>
          </motion.div>
        </motion.section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              {/* Contact Info Cards */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} className="space-y-8">
                
                {/* Chennai Office */}
                <div className="p-8 rounded-xl shadow-lg bg-slate-100">
                  <h2 className="text-xl font-semibold mb-4">Chennai Office</h2>
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-blue-600" />
                    <p className="text-gray-600">Old No G1, New G3, KAIZEN 2nd & 3rd Floor Plot No, 565Q, G Block, Annanagar East, Chennai, Tamil Nadu 600102</p>
                  </div>
                </div>

                {/* Mumbai Office */}
                <div className="p-8 rounded-xl shadow-lg bg-slate-100">
                  <h2 className="text-xl font-semibold mb-4">Mumbai Office</h2>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <MapPin className="text-blue-600" />
                      <p className="text-gray-600">407, MAYURESH PLANET, PLOT NO - 42 & 43, SECTOR-15, CBD BELAPUR NAVI MUMBAI, MAHARASHTRA, 400614</p>
                    </div>
                    <div>
                      <p className="font-medium">Export Customer Service</p>
                      <p className="text-gray-600">+91 2245174102, +91 2245174109, +91 2245174118</p>
                    </div>
                    <div>
                      <p className="font-medium">Export Docs Team</p>
                      <p className="text-gray-600">+91 2245174103, +91 2245174105</p>
                    </div>
                    <div>
                      <p className="font-medium">Import Docs Team</p>
                      <p className="text-gray-600">+91 2245174104, +91 2245174106</p>
                    </div>
                    <div>
                      <p className="font-medium">Import Customer Service</p>
                      <p className="text-gray-600">+91 2245174113, +91 2245174110, +91 2245174107, +91 2245174112</p>
                    </div>
                  </div>
                </div>

                {/* New Delhi Office */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">New Delhi Office</h2>
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-blue-600" />
                    <p className="text-gray-600">JA 511,DLF Tower A,Jasola District Centre, New Delhi, 110025</p>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91 9999022030</p>
                  </div>
                </div>

                  {/* Bangalore Office */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Bangalore Office</h2>
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-blue-600" />
                    <p className="text-gray-600">No 2M-216, First Floor, 2nd Main, East Of NGEF Layout, Kasturinagar, Bangalore-560043</p>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91 9986949743</p>
                  </div>
                </div>

                {/* Kolkata Office */}
                <div className="p-8 rounded-xl shadow-lg bg-slate-100">
                  <h2 className="text-xl font-semibold mb-4">Kolkata Office</h2>
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-blue-600" />
                    <p className="text-gray-600">Room No - 29, 4th Floor, 6, Jawaharlal Nehru Rd, Siddha Esplanade, Adjacent to Metro Central (Previously Metro Cinema), Kolkata, West Bengal 700013</p>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91 6290921534</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t">
                  <p className="font-medium mb-4">Connect With Us</p>
                  <div className="flex gap-4">
                    <motion.a href="https://www.linkedin.com/company/gglus/" target="_blank" rel="noopener noreferrer" whileHover={{
                    y: -5
                  }} className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <FaLinkedin size={18} />
                    </motion.a>
                    <motion.a href="https://www.facebook.com/gglusa" target="_blank" rel="noopener noreferrer" whileHover={{
                    y: -5
                  }} className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <FaFacebookF size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
                <p className="text-gray-600 mb-6">Fill in the form below and we'll get back to you as soon as possible.</p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" {...register("firstName")} className="border-gray-200 focus:ring-blue-500" />
                    <Input placeholder="Last Name" {...register("lastName")} className="border-gray-200 focus:ring-blue-500" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Email" type="email" {...register("email")} className="border-gray-200 focus:ring-blue-500" />
                    <Input placeholder="Phone" {...register("phone")} className="border-gray-200 focus:ring-blue-500" />
                  </div>
                  <Input placeholder="Organization/Company" {...register("organization")} className="border-gray-200 focus:ring-blue-500" />
                  <Textarea placeholder="Your Message" className="min-h-[120px] border-gray-200 focus:ring-blue-500" {...register("message")} />
                  <motion.div whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }}>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 flex items-center justify-center gap-2">
                      Send Message
                      <Send size={18} />
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
                <MapPin className="text-blue-600" />
                Our Location
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Visit us at our Singapore office location</p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
              <div className="h-[500px] w-full relative">
                <iframe src="https://www.google.com/maps/d/embed?mid=1GorHPvFj8yMbcANzh1a6NzHSIj-fDHs&ehbc=2E312F" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="GGL Singapore Office Location"></iframe>
                <div className="absolute top-0 left-0 right-0 h-14 bg-white z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-14 bg-white z-10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Contact;
