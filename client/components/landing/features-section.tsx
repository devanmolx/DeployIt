"use client";

import { Code2, Globe, Zap, BarChart3, Lock, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    name: "Instant Deployments",
    description: "Deploy directly from Git or upload your code, and we'll build and deploy in seconds.",
    icon: Zap,
  },
  {
    name: "Global CDN",
    description: "Your sites are automatically served from our global edge network for ultra-fast performance.",
    icon: Globe,
  },
  {
    name: "Framework Agnostic",
    description: "Support for all major frameworks including Next.js, React, Vue, Svelte, and more.",
    icon: Code2,
  },
  {
    name: "Advanced Analytics",
    description: "Get insights into your site's performance, visitors, and more with our analytics dashboard.",
    icon: BarChart3,
  },
  {
    name: "Secure by Default",
    description: "All deployments are secured with SSL certificates and modern security features.",
    icon: Lock,
  },
  {
    name: "Preview Deployments",
    description: "Automatically create previews for every pull request to test changes before they go live.",
    icon: GitBranch,
  },
];

export function FeaturesSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Everything you need to deploy with confidence
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our platform provides all the tools you need to deploy and scale your web applications.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="mt-4 text-lg font-semibold">
                      {feature.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}