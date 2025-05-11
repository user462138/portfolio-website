"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  Mail,
  Code,
  Database,
  Globe,
  Terminal,
  Cpu,
  Layout,
  Server,
  Cloud,
  GitBranch,
  Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  const technologies = [
    {
      icon: <Server className="w-8 h-8" />,
      name: "Backend",
      items: [ "ASP.NET", "C#", "Node.js", "Express"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      name: "Frontend",
      items: ["Vue 3", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "Databases",
      items: [ "Microsoft SQL Server", "PostgreSQL", "MongoDB", "SQL"],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      name: "Cloud",
      items: ["Azure", "Docker", "Kubernetes"],
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      name: "Tools",
      items: ["Git", "Linux", "Visual Studio", "VS Code"],
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      name: "Testing",
      items: ["Unit testing", "Jest"],
    },
    {
      icon: <Layout className="w-8 h-8" />,
      name: "UI/UX",
      items: ["Figma", "Canva"],
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      name: "DevOps",
      items: ["CI/CD", "Jenkins", "GitHub Actions", "ArgoCD"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: "APIs",
      items: ["REST APIs", "GraphQL"],
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-background to-muted/10 relative"
    >
      <div className="container-custom">
        <div ref={ref}>
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-sm uppercase tracking-widest text-neon-blue mb-2"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.h3
              className="text-3xl md:text-4xl font-heading font-bold mb-6"
              variants={itemVariants}
            >
              Get to Know Me
            </motion.h3>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"
              variants={itemVariants}
            ></motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <h3 className="text-2xl font-heading font-bold mb-4">
                I&apos;m <span className="text-neon-blue">Yazan Dukhan</span>,
              </h3>

              <p className="text-muted-foreground mb-6">
                A passionate Software Engineer, with a strong foundation in both
                software engineering and architectural design. I thrive in
                full-stack development environments and enjoy building scalable,
                user-focused applications. Through my internship at Numble and
                projects like QUOTE+ and a Pokémon game app, I’ve gained
                hands-on experience with modern tech stacks including .NET 8,
                Vue.js, React, and Azure.
              </p>

              <p className="text-muted-foreground mb-6">
                My strengths lie in translating complex requirements into
                intuitive solutions, integrating secure authentication flows,
                and working collaboratively in Agile teams. I’m always eager to
                learn new technologies and challenge myself through real-world
                projects. With a background in architectural design, I bring a
                unique perspective to UI/UX and system structure.
              </p>

              <p className="text-muted-foreground mb-8">
                Currently, I’m looking for opportunities to further grow as a
                software engineer and contribute to impactful, user-centered
                solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button
                  className="bg-neon-blue hover:bg-neon-blue/90"
                  size="lg"
                  asChild
                >
                  <motion.a
                    href="/yazan-dukhan-resume.pdf"
                    download
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FileText className="w-4 h-4" /> Download Resume
                  </motion.a>
                </Button> */}
                <Button
                  variant="outline"
                  size="lg"
                  className="border-neon-purple hover:text-neon-purple"
                  asChild
                >
                  <motion.a
                    href="#contact"
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-4 h-4" /> Contact Me
                  </motion.a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 grid grid-cols-2 md:grid-cols-3 gap-4"
              variants={itemVariants}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Card className="bg-card/50 glass-effect border-none overflow-hidden card-hover h-full">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-2 text-neon-blue">{tech.icon}</div>
                        <h4 className="font-heading font-semibold mb-2">
                          {tech.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {tech.items.join(" · ")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* <Separator className="my-16 bg-muted/30" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              {
                number: "5+",
                title: "Years Experience",
                description:
                  "In software development working on various projects",
              },
              {
                number: "50+",
                title: "Projects Completed",
                description: "For clients across multiple industries",
              },
              {
                number: "15+",
                title: "Technologies Mastered",
                description: "From frontend frameworks to backend systems",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-card/50 glass-effect border-none overflow-hidden card-hover">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-5xl font-heading font-bold text-neon-blue mb-3 animate-glow">
                        {item.number}
                      </p>
                      <h4 className="text-xl font-heading font-semibold mb-3">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
