"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // ANCHOR: Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Store form reference before async operation
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://getform.io/f/bpjpwzqb', {
        method: 'POST',
        body: formData,
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      console.log('Response statusText:', response.statusText);
      
      if (response.status >= 200 && response.status < 300) {
        setSubmitStatus('success');
        if (form) {
          form.reset();
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80">
              Contact
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Let's Build Something
            <br />
            <span className="text-white/70">Worth Launching</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === 'success' && (
              <div className="bg-green-500/20 border border-green-500/30 p-4 text-green-400 text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-500/30 p-4 text-red-400 text-sm">
                Something went wrong. Please try again later.
              </div>
            )}
            <div>
              <label
                htmlFor="name"
                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border-2 border-white/20 p-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border-2 border-white/20 p-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border-2 border-white/20 p-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-white text-black py-3 text-sm uppercase tracking-widest hover:bg-white/90 transition-colors relative group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
          </form>
          <div className="border-2 border-white/20 bg-white/5 backdrop-blur-sm p-8 h-full">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Contact Information
            </h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-sm mr-4">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-widest text-white/70 mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:contact@haerulr2.dev"
                    className="text-white hover:text-white/70 transition-colors"
                  >
                    contact@haerulr2.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-sm mr-4">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-widest text-white/70 mb-2">
                    Phone
                  </div>
                  <a
                    href="https://t.me/+6285722556224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/70 transition-colors"
                  >
                    +62 857-2255-6224
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-sm mr-4">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-widest text-white/70 mb-2">
                    Address
                  </div>
                  <address className="not-italic text-white/80">
                    Based in Indonesia — Available Remotely
                  </address>
                </div>
              </div>

              <div>
                <div className="text-sm uppercase tracking-widest text-white/70 mb-3">
                  Social
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/haerulr2/"
                    className="bg-white/10 p-2 rounded-sm hover:bg-white/20 transition-colors group"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@kopidanbug"
                    className="bg-white/10 p-2 rounded-sm hover:bg-white/20 transition-colors group"
                    aria-label="Follow us on TikTok"
                  >
                    <svg className="w-4 h-4 text-white/80 group-hover:text-white transition-colors translate-y-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/haerulr2"
                    className="bg-white/10 p-2 rounded-sm hover:bg-white/20 transition-colors group"
                    aria-label="Follow us on GitHub"
                  >
                    <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-32 h-32 border-2 border-white/10"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-white/5"></div>
    </section>
  );
}
