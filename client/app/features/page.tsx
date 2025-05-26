import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Powerful Features for Modern Development
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build and deploy your next great idea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/dashboard">
              <Button size="lg" className="font-semibold">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const features = [
  {
    title: "Modern Stack",
    description: "Built with Next.js 14, React Server Components, and Tailwind CSS for optimal performance.",
  },
  {
    title: "Type Safety",
    description: "Full TypeScript support with strict type checking for reliable code.",
  },
  {
    title: "Beautiful UI",
    description: "Professionally designed components using shadcn/ui and Tailwind CSS.",
  },
  {
    title: "Fast Deployment",
    description: "One-click deployment to your favorite hosting platform.",
  },
  {
    title: "SEO Optimized",
    description: "Built-in SEO best practices for better search engine rankings.",
  },
  {
    title: "Developer Experience",
    description: "Hot reloading, fast refresh, and excellent debugging tools included.",
  },
  {
    title: "Global CDN",
    description: "Your sites are automatically served from our global edge network.",
  },
  {
    title: "Analytics",
    description: "Built-in analytics to track your site's performance and visitors.",
  },
  {
    title: "Collaboration",
    description: "Team features for working together on projects effectively.",
  },
];