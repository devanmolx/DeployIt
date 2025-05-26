import { MainNav } from "@/components/main-nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/landing/footer";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Blog & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Latest news, updates, and technical articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{formatDistanceToNow(new Date(post.date), { addSuffix: true })}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const blogPosts = [
  {
    title: "Introducing Deploy 2.0: The Future of Web Deployment",
    excerpt: "Today, we're excited to announce Deploy 2.0, featuring improved build times, enhanced analytics, and a completely redesigned dashboard.",
    date: "2025-03-15T10:00:00Z",
    category: "Product Update",
    author: {
      name: "Sarah Johnson",
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
  },
  {
    title: "Building Faster Websites with Edge Functions",
    excerpt: "Learn how to leverage edge functions to improve your website's performance and reduce latency for users worldwide.",
    date: "2025-03-10T10:00:00Z",
    category: "Technical",
    author: {
      name: "Michael Chen",
      role: "Senior Developer",
      avatar: "https://i.pravatar.cc/150?u=michael",
    },
  },
  {
    title: "The Complete Guide to Next.js Deployment",
    excerpt: "Everything you need to know about deploying Next.js applications, from configuration to optimization.",
    date: "2025-03-05T10:00:00Z",
    category: "Tutorial",
    author: {
      name: "Alex Rodriguez",
      role: "Developer Advocate",
      avatar: "https://i.pravatar.cc/150?u=alex",
    },
  },
  {
    title: "Optimizing Your CI/CD Pipeline",
    excerpt: "Best practices and tips for creating efficient CI/CD pipelines that save time and reduce errors.",
    date: "2025-03-01T10:00:00Z",
    category: "DevOps",
    author: {
      name: "Emma Wilson",
      role: "DevOps Engineer",
      avatar: "https://i.pravatar.cc/150?u=emma",
    },
  },
  {
    title: "Securing Your Deployments",
    excerpt: "Essential security practices to protect your applications in production environments.",
    date: "2025-02-25T10:00:00Z",
    category: "Security",
    author: {
      name: "David Kim",
      role: "Security Engineer",
      avatar: "https://i.pravatar.cc/150?u=david",
    },
  },
  {
    title: "Scaling Applications with Kubernetes",
    excerpt: "A comprehensive guide to scaling your applications using Kubernetes and container orchestration.",
    date: "2025-02-20T10:00:00Z",
    category: "Infrastructure",
    author: {
      name: "Lisa Thompson",
      role: "Cloud Architect",
      avatar: "https://i.pravatar.cc/150?u=lisa",
    },
  },
];