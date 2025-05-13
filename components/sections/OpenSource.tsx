/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Star, GitFork, ExternalLink, Folder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface OpenSourceProject {
  demoUrl: any;
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  stars: number;
  forks: number;
  repoUrl: string;
  technologies: string[];
}

const projects: OpenSourceProject[] = [
  {
    id: "meetpoint",
    title: "MeetPoint",
    description:
      "A full-stack event management platform for planning, sharing, and managing events with secure login and role-based access.",
    image: `/meet-point.png`,
    alt: "MeetPoint",
    stars: 75,
    forks: 10,
    repoUrl: "",
    demoUrl: "https://app-stage-yazan-frontend-gqcteue8afhce7ed.westeurope-01.azurewebsites.net/",
    technologies: [
      ".NET 8",
      "Vue 3",
      "Pinia",
      "Vue Router",
      "Azure B2C",
      "SQL Server",
      "Azure DevOps",
    ],
  },
  {
    id: "quote-plus",
    title: "QUOTE+",
    description:
      "An internal sales optimization tool for enriching ERP-generated quotes with rich content, layout customization, and approval workflows.",
    image: "/quote-plus.png",
    alt: "QUOTE+",
    stars: 60,
    forks: 5,
    repoUrl: "",
    demoUrl: "",
    technologies: [
      "C#",
      ".NET",
      "Entity Framework",
      "TypeScript",
      "React",
      "SQL Server",
      "Azure AD",
    ],
  },
  {
    id: "pokemon-app",
    title: "Pokémon Game App",
    description:
      "A full-stack Pokémon management app where users can catch, train, and battle Pokémon, including a mini-game to upgrade stats.",
    image: "/pokemons.png",
    alt: "Pokemon",
    stars: 140,
    forks: 30,
    repoUrl: "https://github.com/user462138/TYJ.game",
    demoUrl: "https://tyj.onrender.com/",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "TypeScript",
      "CSS",
      "Jest",
      "Selenium",
    ],
  },
  {
    id: "crypto-wallet",
    title: "Crypto Wallet App",
    description:
      "A mobile crypto wallet prototype with portfolio tracking, price charts, and real-time market updates.",
    image: "/x-hodl.jpg",
    alt: "xHodl",
    stars: 95,
    forks: 18,
    repoUrl: "https://github.com/user462138/xHODL",
    demoUrl: "",
    technologies: [
      "React Native",
      "React Native Paper",
      "Victory Native",
      "TypeScript",
      "Redux",
    ],
  },
  {
    id: "ap-fit",
    title: "AP.fit",
    description:
      "A fitness-focused web app offering resources for strength training, cardio, yoga, nutrition guidance, and a calorie calculator to support users on their fitness journey.",
    image: "/ap-fit.png",
    alt: "Ap Fit",
    stars: 120,
    forks: 35,
    repoUrl: "https://github.com/user462138/AP.fit",
    demoUrl: "https://tyj-black.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const OpenSource = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

  return (
    <section
      id="open-source"
      className="section-padding bg-gradient-to-b from-muted/10 to-background relative"
    >
      <div className="container-custom" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative px-14 max-w-4xl mx-auto"
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.id}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className="overflow-hidden border-none bg-card/30 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(67,97,238,0.3)] transition-all duration-500">
                      <CardContent className="p-0">
                        <div className="relative h-[400px]">
                          <img
                            src={project.image}
                            alt={project.alt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                          <div className="absolute bottom-0 left-0 w-full p-8 text-center">
                            <h3 className="text-3xl font-heading font-bold text-white mb-4">
                              {project.title}
                            </h3>
                            <p className="text-gray-200 mb-6 text-lg">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                              {project.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="bg-neon-blue/20 text-white"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex justify-center items-center mb-6">
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
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 hover:bg-neon-blue hover:text-white transition-colors" />
            <CarouselNext className="absolute -right-12 hover:bg-neon-blue hover:text-white transition-colors" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
