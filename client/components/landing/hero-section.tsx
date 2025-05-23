"use client";

import { useRef, useState } from "react";
import { ArrowRight, Code2, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative overflow-hidden bg-background py-24 sm:py-32"
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 120, 255, 0.15), transparent 50%)`
        }}
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Deploy your web apps with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
              confidence
            </span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ship your applications faster with our platform. Deploy, preview, and scale your favorite
            front-end frameworks with just a few clicks.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                Get started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/docs" className="text-sm font-semibold leading-6">
              <Button variant="ghost" size="lg">
                Learn more
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 flow-root sm:mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="rounded-xl bg-card p-2 ring-1 ring-inset ring-muted shadow-2xl">
            <div className="flex items-center gap-x-1 bg-secondary rounded-t-lg p-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
              <div className="ml-2 text-sm text-muted-foreground">Terminal</div>
            </div>
            <div className="bg-card rounded-b-lg p-6 font-mono text-sm">
              <div className="flex items-center">
                <span className="text-muted-foreground">$</span>
                <span className="ml-2">npx create-next-app my-project</span>
              </div>
              <div className="mt-3 flex items-center">
                <span className="text-muted-foreground">$</span>
                <span className="ml-2">cd my-project</span>
              </div>
              <div className="mt-3 flex items-center">
                <span className="text-muted-foreground">$</span>
                <span className="ml-2">deploy init</span>
              </div>
              <div className="mt-3 flex items-center">
                <span className="text-muted-foreground">🚀</span>
                <span className="ml-2 text-green-500">Success! Your project is deployed at:</span>
              </div>
              <div className="mt-1 ml-5 text-blue-500 underline">https://my-project.deploy.app</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}