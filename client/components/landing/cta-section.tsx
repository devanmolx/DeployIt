"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to deploy your next project?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join thousands of developers who are already using our platform to build and deploy their applications.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                Get started for free <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact-sales">
              <Button variant="outline" size="lg">
                Contact sales
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}