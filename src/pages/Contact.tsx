import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import LocationsSection from "@/components/LocationsSection";
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
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
        {/* Hero Section */}
        <motion.section initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="relative h-[40vh] flex items-center justify-center bg-blue-600 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy/90" />
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

        {/* Location Map and Selector */}
        <section className="py-12 bg-white relative">
          <LocationsSection />
        </section>

        {/* Contact Form Only */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="p-8 rounded-xl shadow-lg max-w-2xl mx-auto bg-slate-100">
              <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill in the form below and we'll get back to you as soon as possible.
              </p>
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
                  <Button type="submit" className="w-full text-white py-6 flex items-center justify-center gap-2 bg-brand-navy">
                    Send Message
                    <Send size={18} />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Contact;