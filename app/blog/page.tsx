/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar, Clock, Tag, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  time: string;
  tags: string[];
  image?: string;
  codeSnippet?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'First Week at Tech Corp: Getting Started',
    excerpt: 'My journey begins with setting up the development environment and meeting the team.',
    content: `My first week as an intern at Tech Corp has been an incredible learning experience. The team welcomed me warmly and helped me set up my development environment. I learned about their tech stack, which includes React, TypeScript, and Node.js.

Key takeaways from the first week:
- Importance of proper development environment setup
- Understanding company coding standards
- Learning about the team's agile workflow
- Getting familiar with the codebase

I'm excited to start contributing to real projects next week!`,
    date: '2024-03-01',
    time: '09:00',
    tags: ['onboarding', 'teamwork', 'setup'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
  },
  {
    id: '2',
    title: 'First Pull Request: Lessons Learned',
    excerpt: 'Creating and submitting my first PR taught me valuable lessons about code review and collaboration.',
    content: `Today I submitted my first pull request! The feature was a simple UI component, but the process taught me so much about professional development workflows.

Code snippet from my PR:
\`\`\`typescript
const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
\`\`\`

Key learnings:
- Importance of clear PR descriptions
- How to handle code review feedback
- Git workflow best practices
- Writing meaningful commit messages`,
    date: '2024-03-05',
    time: '14:30',
    tags: ['coding', 'git', 'learning'],
    codeSnippet: `const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};`
  },
  {
    id: '3',
    title: 'Team Building: Hackathon Success',
    excerpt: 'Participating in my first internal hackathon and winning the innovation award.',
    content: `What an exciting week! Our team participated in the company's internal hackathon and won the innovation award. We built a real-time collaboration tool using WebSocket technology.

Our project stood out because:
- Innovative solution to a real problem
- Clean, maintainable code
- Great user experience
- Excellent team collaboration

This experience taught me the importance of quick iteration and effective team communication.`,
    date: '2024-03-15',
    time: '16:45',
    tags: ['hackathon', 'teamwork', 'innovation'],
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
  }
];

const PostContent = ({ post }: { post: BlogPost | null }) => {
  const contentMotion = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  if (!post) {
    return (
      <motion.div
        className="py-8 text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Loading post content...
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="space-y-6"
      {...contentMotion}
    >
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{post.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4" />
          <div className="flex gap-2">
            {post.tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge variant="outline" className="border-neon-blue">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {post.image && (
        <motion.div 
          className="relative w-full aspect-video rounded-md overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </motion.div>
      )}
      
      <motion.div 
        className="prose prose-invert max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {post.content.split('\n').map((paragraph, index) => (
          <motion.p 
            key={index} 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
      
      {post.codeSnippet && (
        <motion.div 
          className="bg-muted/20 p-4 rounded-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <pre className="text-sm overflow-x-auto">
            <code>{post.codeSnippet}</code>
          </pre>
        </motion.div>
      )}
    </motion.div>
  );
};

const PostDialog = ({ post, onClose }: { post: BlogPost | null; onClose: () => void }) => {
  return (
    <DialogContent className="max-w-4xl bg-card glass-effect">
      <DialogHeader>
        <DialogTitle className="text-2xl font-heading">
          {post?.title || 'Loading...'}
        </DialogTitle>
        <DialogClose asChild>
          <Button
            variant="ghost"
            className="absolute right-4 top-4 rounded-full h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogClose>
      </DialogHeader>
      <PostContent post={post} />
    </DialogContent>
  );
};

const BlogPostTimelineItem = ({
  post,
  index,
  onClick,
}: {
  post: BlogPost;
  index: number;
  onClick: () => void;
}) => {
  const postRef = useRef(null);
  const isInView = useInView(postRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      key={post.id}
      ref={postRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -10 : 10 }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              rotateY: 0,
              transition: {
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              },
            }
          : {}
      }
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 relative`}
    >
      <div className="flex-1">
        <motion.div
          whileHover={{
            scale: 1.02,
            rotateY: index % 2 === 0 ? 5 : -5,
            transition: { duration: 0.3 },
          }}
        >
          <Card
            className="glass-effect border-none overflow-hidden cursor-pointer transform perspective-1000"
            onClick={onClick}
          >
            <CardContent className="p-6 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <h3 className="text-xl font-heading font-bold mb-3 relative z-10">
                {post.title}
              </h3>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{format(new Date(post.date), "MMM dd, yyyy")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.time}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 relative z-10">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {post.tags.map((tag, tagIndex) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: tagIndex * 0.1 }}
                  >
                    <Badge variant="secondary" className="bg-neon-blue/20">
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-neon-blue z-10
          ${index % 2 === 0 ? "md:-right-6" : "md:-left-6"} left-1/2 -translate-x-1/2 md:translate-x-0`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
        style={{
          boxShadow: "0 0 20px var(--neon-blue), 0 0 40px var(--neon-blue)",
        }}
      />
    </motion.div>
  );
};

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  const filteredPosts = selectedTags.length > 0
    ? blogPosts.filter(post => post.tags.some(tag => selectedTags.includes(tag)))
    : blogPosts;

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-sm uppercase tracking-widest text-neon-blue mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Journey
          </motion.h2>
          <motion.h1 
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Internship Blog
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {allTags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedTags.includes(tag)
                      ? "bg-neon-blue hover:bg-neon-blue/90"
                      : "hover:border-neon-blue"
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative" ref={containerRef}>
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-px"
            style={{
              background: "linear-gradient(180deg, var(--neon-blue) 0%, var(--neon-purple) 50%, transparent 100%)",
              height: useTransform(scaleProgress, [0, 1], ["0%", "100%"]),
              top: 0
            }}
          />
          
          <div className="space-y-12">
            {filteredPosts.map((post, index) => (
              <BlogPostTimelineItem
                key={post.id}
                post={post}
                index={index}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <PostDialog post={selectedPost} onClose={() => setSelectedPost(null)} />
      </Dialog>
    </div>
  );
}