"use client"

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const experiences = [
  {
    company: "Numble",
    title: "Software Engineer Intern",
    period: "Feb 2025 – Jun 2025",
    location: "Antwerp, Belgium",
    description: "Built a full-stack event management application with a secure login system, modern UI, and CI/CD deployment. Contributed to all layers of the stack in an Agile environment.",
    technologies: [".NET 8", "Vue 3", "SQL Server", "Azure B2C", "Azure DevOps", "Pinia", "Axios", "Vue Router"],
    achievements: [
      "Developed scalable REST APIs and a responsive front-end",
      "Integrated secure authentication and role-based access using Azure B2C",
      "Implemented CI/CD pipelines with Azure DevOps"
    ]
  },
  {
    company: "Stad Antwerpen",
    title: "IT Support (Student Job)",
    period: "Jul 2024 – Aug 2024",
    location: "Antwerp, Belgium",
    description: "Provided technical support to municipal staff, troubleshooting hardware and software issues and deploying new systems.",
    technologies: ["Windows", "Office 365", "Printer/Network Setup", "Hardware Deployment"],
    achievements: [
      "Resolved support tickets efficiently across multiple departments",
      "Configured and deployed desktops, laptops, and peripherals",
      "Contributed to smoother IT onboarding for new employees"
    ]
  },
  {
    company: "QUOTE+ (Microtron)",
    title: "Full-Stack Developer (Student Project)",
    period: "Sep 2024 – Dec 2024",
    location: "Antwerp, Belgium",
    description: "Developed a quote optimization tool integrated with ERP systems and Azure AD for internal sales teams.",
    technologies: ["C#", ".NET", "Entity Framework", "TypeScript", "React", "SQL Server", "Azure"],
    achievements: [
      "Built a responsive, GDPR-compliant application for desktop and mobile",
      "Implemented SSO with Azure AD and ERP role syncing",
      "Enabled media-rich quote customization and approval workflows"
    ]
  },
  {
    company: "Pokémon Game App",
    title: "Full-Stack Developer (Academic Project)",
    period: "Jun 2024",
    location: "Antwerp, Belgium",
    description: "Developed an interactive Pokémon management app with real-time gameplay features and a custom mini-game system.",
    technologies: ["Node.js", "Express", "EJS", "CSS", "TypeScript", "MongoDB"],
    achievements: [
      "Created RESTful APIs for Pokémon management and user actions",
      "Implemented battle mechanics and stat-based gameplay upgrades",
      "Tested thoroughly using Jest and Selenium"
    ]
  }
];

const Experience = () => {
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

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-background to-muted/10 relative">
      <div className="container-custom" ref={ref}>
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
            My Journey
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
            variants={itemVariants}
          >
            Professional Experience
          </motion.h3>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <Tabs defaultValue={experiences[0].company} orientation="vertical" className="flex flex-col md:flex-row gap-8">
            <TabsList className="md:w-[200px] h-fit flex-col">
              {experiences.map((exp) => (
                <TabsTrigger
                  key={exp.company}
                  value={exp.company}
                  className="w-full text-left justify-start p-4 data-[state=active]:bg-muted"
                >
                  {exp.company}
                </TabsTrigger>
              ))}
            </TabsList>
            {experiences.map((experience) => (
              <TabsContent
                key={experience.company}
                value={experience.company}
                className="flex-1 mt-0"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="text-xl font-heading font-bold mb-2">{experience.title}</h4>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building2 className="w-4 h-4" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                      <Badge variant="outline" className="border-neon-blue ml-2">
                        {experience.location}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{experience.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {experience.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            <Badge variant="secondary" className="bg-neon-blue/20">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;