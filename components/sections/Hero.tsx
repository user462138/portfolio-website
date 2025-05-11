"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <ParticleBackground />

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-muted-foreground text-lg md:text-xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I&apos;m
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 neon-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Yazan Dukhan
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl font-heading mb-8 text-foreground/90 h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Software Engineer").start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 40,
              }}
            />
          </motion.div>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Crafting elegant digital experiences with clean code and innovative
            solutions
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-neon-blue hover:bg-neon-blue/90 text-white font-bold px-8 py-6"
              asChild
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Get in Touch
              </motion.a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neon-purple text-foreground hover:text-neon-purple hover:border-neon-purple/80 font-bold px-8 py-6"
              asChild
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                View Projects
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
