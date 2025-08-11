"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import NoiseBackground from "@/components/noise-background";
import About from "@/components/about";

// ANCHOR: Custom hook untuk hash navigation
const useHashNavigation = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Delay scroll untuk memastikan semua komponen sudah ter-render
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    // Handle hash saat halaman pertama kali dimuat
    if (window.location.hash) {
      // Delay lebih lama untuk lazy loading
      setTimeout(handleHashChange, 500);
    }

    // Handle hash change events
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
};

// ANCHOR: Scroll restoration component yang dimodifikasi
const ScrollRestoration = () => {
  useEffect(() => {
    // Hanya set scroll ke top jika tidak ada hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const handleBeforeUnload = () => {
      // Hanya reset scroll jika tidak ada hash
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
};

// Lazy load components
const Features = dynamic(() => import("@/components/features"));

const Work = dynamic(() => import("@/components/work"));

const Process = dynamic(() => import("@/components/process"));

const Testimonials = dynamic(() => import("@/components/testimonials"));

const Contact = dynamic(() => import("@/components/contact"));

const Footer = dynamic(() => import("@/components/footer"));

// LazyLoad wrapper component
function LazyLoad({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return <div ref={ref}>{inView ? children : null}</div>;
}

export default function Home() {
  // ANCHOR: Gunakan custom hook untuk hash navigation
  useHashNavigation();

  return (
    <main className="bg-black text-white">
      <ScrollRestoration />
      <NoiseBackground />
      <Navbar />
      <Hero />
      <LazyLoad>
        <Features />
      </LazyLoad>
      <LazyLoad>
        <Work />
      </LazyLoad>
      <LazyLoad>
        <Process />
      </LazyLoad>
      <LazyLoad>
        <About />
      </LazyLoad>
      <LazyLoad>
        <Testimonials />
      </LazyLoad>
      <LazyLoad>
        <Contact />
      </LazyLoad>
      <LazyLoad>
        <Footer />
      </LazyLoad>
    </main>
  );
}
