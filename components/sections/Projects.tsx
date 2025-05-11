"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Folder, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import OpenSource from './OpenSource';

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const projects: ProjectProps[] = [
    {
      id: "meetpoint",
      title: "MeetPoint",
      description:
        "A full-stack event management platform for planning, sharing, and managing events with secure login and role-based access.",
      technologies: [".NET 8", "Vue 3", "Pinia", "Vue Router", "Azure B2C", "SQL Server", "Azure DevOps"],
      demoUrl: "", // Add if hosted
      repoUrl: "" // Add link if public
    },
    {
      id: "quote-plus",
      title: "QUOTE+",
      description:
        "An internal sales optimization tool for enriching ERP-generated quotes with rich content, layout customization, and approval workflows.",
      technologies: ["C#", ".NET", "Entity Framework", "TypeScript", "React", "SQL Server", "Azure AD"],
      demoUrl: "", // You can add one if hosted
      repoUrl: "" // Internal project, so likely private or not available
    },
    {
      id: "pokemon-app",
      title: "Pokémon Game App",
      description:
        "A full-stack Pokémon management app where users can catch, train, and battle Pokémon, including a mini-game to upgrade stats.",
      technologies: ["Node.js", "Express", "MongoDB", "EJS", "TypeScript", "CSS", "Jest", "Selenium"],
      demoUrl: "https://github.com/Yazan/pokemon-game", // Add if deployed
      repoUrl: "https://github.com/Yazan/pokemon-game" // Replace with actual repo URL
    },
    {
      id: "crypto-wallet",
      title: "Crypto Wallet App",
      description:
        "A mobile crypto wallet prototype with portfolio tracking, price charts, and real-time market updates.",
      technologies: ["React Native", "React Native Paper", "Victory Native", "TypeScript", "Redux"],
      demoUrl: "", // Add if available
      repoUrl: "https://github.com/Yazan/crypto-wallet" // Replace with real repo
    },
    {
      id: "ap-fit",
      title: "AP.fit",
      description:
        "A fitness-focused web app offering resources for strength training, cardio, yoga, nutrition guidance, and a calorie calculator to support users on their fitness journey.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "", // Can be added if hosted
      repoUrl: "https://github.com/user462138/AP.fit"
    }  
  ];
  
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-muted/10 relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          className="flex items-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold text-foreground whitespace-nowrap"
            variants={itemVariants}
          >
            Projects
          </motion.h2>
          <motion.div
            className="h-px flex-grow bg-gradient-to-r from-neon-blue to-transparent"
            variants={itemVariants}
          />
        </motion.div>

        <OpenSource />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="bg-card/30 backdrop-blur-sm border-none hover:shadow-[0_0_30px_rgba(67,97,238,0.2)] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <Folder className="w-8 h-8 text-neon-blue" />
                    <div className="flex gap-3">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-neon-blue transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-neon-blue transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <p className="text-sm text-muted-foreground">
                    {project.technologies.join(" · ")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;