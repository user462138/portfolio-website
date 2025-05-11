"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  detailedDescription?: string;
  features?: string[];
  technologies?: string[];
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          className="cursor-pointer"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Card className="overflow-hidden border-none bg-card/30 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(67,97,238,0.3)] transition-all duration-500">
            <div className="relative h-[400px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500"
                style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
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
                  {project.technologies?.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-neon-blue/20 text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center gap-6">
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-neon-blue/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-6 w-6 text-white" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-neon-blue/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-6 w-6 text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </DialogTrigger>
      
      <DialogContent className="max-w-3xl bg-card/95 backdrop-blur-sm border-none">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">
            {project.title}
          </DialogTitle>
          <DialogDescription>
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">About this project</h4>
              <p className="text-muted-foreground">
                {project.detailedDescription || project.description}
              </p>
            </div>
            
            {project.features && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.technologies && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-neon-blue">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex gap-4">
            {project.demoUrl && (
              <Button asChild className="bg-neon-blue hover:bg-neon-blue/90">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </Button>
            )}
            {project.repoUrl && (
              <Button variant="outline" asChild className="border-neon-purple hover:text-neon-purple">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" /> View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;