"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Code, Server, Zap } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -25% 0px",
  });

  const skills = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Frontend",
      description: "HTML, CSS, JavaScript, React, Next.js, Angular, Vue, Electron",
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Backend & Infrastructure",
      description: "Node.js, Express, Cloudflare Tunnel, Self-hosted API",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance & Experience",
      description: "Optimization, Speed, UX, Babylon.js 3D Artspace",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-neutral-900 to-black"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={titleVariants as any}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80">About Me</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Frontend Developer
            <br />
            <span className="text-white/70">Building Digital Experiences</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants as any}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Main content */}
          <motion.div variants={itemVariants as any} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 border border-white/20 rounded-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Haerul Fajar</h3>
            </div>

            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                I'm Haerul Fajar, a frontend developer who builds clean, fast, and functional user interfaces.
                I focus on performance, simplicity, and user experience.
                Currently, I'm sharpening my craft with real-world projects and self-hosted backend architecture.
              </p>
              <p>
                I build with HTML, CSS, and JavaScript, working with modern frameworks such as React, Next.js, Angular, and Vue.  
                I've also built desktop applications using Electron, and developed interactive 3D interfaces with Babylon.js.  
                While most of my 3D work was done under NDA as a ghost developer, 
                I'm currently working on an open-source demo to showcase these capabilities.  
                Lately, I'm focusing on self-hosted architectures using Cloudflare Tunnel, Vercel, 
                and backend deployments to sharpen my fullstack workflow.
              </p>
            </div>
          </motion.div>

          {/* Skills section */}
          <motion.div variants={itemVariants as any} className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">What I Do</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants as any}
                  className="group p-4 border border-white/10 hover:border-white/30 transition-all duration-300 rounded-lg hover:bg-white/5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/10 border border-white/20 rounded-lg group-hover:bg-white/20 transition-colors">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-white">{skill.title}</h4>
                  </div>
                  <p className="text-white/70 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants as any}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="text-center">
            <p className="text-white/60 mb-4 text-sm">
              Ready to build something amazing together?
            </p>
            <button
              onClick={() => window.location.href = "#contact"}
              className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Let's Connect
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
