"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    content: "Deploy has completely transformed our development workflow. We're shipping features faster than ever before.",
    author: {
      name: "Sarah Johnson",
      role: "CTO, TechStart",
      avatar: "https://i.pravatar.cc/150?u=sarahjohnson"
    }
  },
  {
    content: "The preview deployments for pull requests have saved us countless hours of manual testing and review.",
    author: {
      name: "Michael Chen",
      role: "Lead Developer, CodeCraft",
      avatar: "https://i.pravatar.cc/150?u=michaelchen"
    }
  },
  {
    content: "We migrated our entire infrastructure to Deploy in a single day. The performance improvements were immediate.",
    author: {
      name: "Alex Rodriguez",
      role: "Engineering Manager, DataFlow",
      avatar: "https://i.pravatar.cc/150?u=alexrodriguez"
    }
  }
];

export function TestimonialsSection() {
  return (
    <div className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by developers worldwide
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See what our customers have to say about our platform.
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <p className="text-lg leading-7 flex-1">{testimonial.content}</p>
                  <div className="mt-6 flex items-center gap-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                      <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.author.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.author.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}