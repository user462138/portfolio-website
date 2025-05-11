"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/user462138",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/yazandukhan",
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:yazandukhan@hotmail.com",
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
    },
  ];

  return (
    <footer className="bg-card relative pt-8 pb-8">
      <div className="container-custom">
        <motion.h1
          className="text-s md:text-m lg:text-l font-heading font-bold mb-6 neon-text text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Built and designed by Yazan Dukhan.
        </motion.h1>
        <p className="text-sm text-muted-foreground text-center">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
