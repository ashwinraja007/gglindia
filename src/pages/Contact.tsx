import React, { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import LocationsSection from "@/components/LocationsSection";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // reCAPTCHA callback binding
    window.handleCaptchaChange = () => {
      const response = window.grecaptcha?.getResponse();
      setCaptchaValid(response?.length > 0);
    };
  }, []);

  const onSubmit = () => {
    if (!captchaValid) {
      alert("Please verify the reCAPTCHA.");
      return;
    }

    // Submit via native HTML form
    document.getElementById("contact-form")?.submit();
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[40vh] flex items-center justify-center bg-blue-600 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy/90" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center px-4 relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Get in Touch</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-light">
              We're here to help and answer any questions you might have.
            </p>
          </motion.div>
        </motion.section>

        {/* Location Section */}
        <section className="py-12 bg-white relative">
          <LocationsSection />
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-xl shadow-lg max-w-2xl mx-auto bg-slate-100"
            >
              <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill in the form below and we'll get back to you as soon as possible.
              </p>

              <form
                id="contact-form"
                action="https://formsubmit.co/ajax/karthikjungleemara@gmail.com"
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" name="firstName" required />
                  <Input placeholder="Last Name" name="lastName" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Email" type="email" name="email" required />
                  <Input placeholder="Phone" name="phone" />
                </div>
                <Input placeholder="Organization/Company" name="organization" />
                <Textarea placeholder="Your Message" name="message" required />

                {/* reCAPTCHA */}
                <div
                  className="g-recaptcha"
                  data-sitekey="YOUR_SITE_KEY_HERE"
                  data-callback="handleCaptchaChange"
                ></div>

                {/* Opt-in Agreement */}
                <div className="space-y-2 mt-4">
                  <label className="flex items-start gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      {...register("optin", {
                        required: "You must agree to proceed",
                      })}
                      className="mt-1"
                    />
                    <span>
                      I confirm that my new import adheres to these conditions:
                      <ul className="list-disc pl-5 mt-1">
                        <li>My contacts explicitly gave me their permission to send Email (newsletter), SMS or WhatsApp campaigns within the last two years, or had been asked to within the last two years.</li>
                        <li>These contacts were not borrowed from a third party</li>
                        <li>These contacts were not purchased or rented</li>
                      </ul>
                    </span>
                  </label>
                  {errors.optin && (
                    <p className="text-red-500 text-sm mt-1">{errors.optin.message}</p>
                  )}
                </div>

                {/* Hidden Settings */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.gglindia.com/contact?success=true"
                />

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full text-white py-6 flex items-center justify-center gap-2 bg-brand-navy"
                  >
                    Send Message <Send size={18} />
                  </Button>
                </motion.div>
              </form>

              {/* Success Popup */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-2"
                  >
                    <CheckCircle className="text-green-600" />
                    Your message has been sent successfully!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
