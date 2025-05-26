import { MainNav } from "@/components/main-nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Book, Code2, Command, FileText, GitBranch, Search, Terminal } from "lucide-react";
import { Footer } from "@/components/landing/footer";

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Learn how to build and deploy your applications
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search documentation..." />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => (
              <Card key={section.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <section.icon className="h-5 w-5 text-primary" />
                    <CardTitle>{section.title}</CardTitle>
                  </div>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.topics.map((topic, i) => (
                      <li key={i}>
                        <a href="#" className="text-sm hover:underline hover:text-primary">
                          {topic}
                        </a>
                      </li>
                    ))}
                  </ul>
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

const sections = [
  {
    title: "Getting Started",
    description: "Start building with our platform",
    icon: Book,
    topics: [
      "Introduction",
      "Quick Start Guide",
      "Installation",
      "Project Structure",
      "Configuration",
    ],
  },
  {
    title: "Deployments",
    description: "Learn about deployment options",
    icon: GitBranch,
    topics: [
      "Deployment Overview",
      "Continuous Integration",
      "Environment Variables",
      "Build Settings",
      "Custom Domains",
    ],
  },
  {
    title: "CLI Reference",
    description: "Command line tool documentation",
    icon: Terminal,
    topics: [
      "CLI Installation",
      "Basic Commands",
      "Project Management",
      "Advanced Usage",
      "Troubleshooting",
    ],
  },
  {
    title: "API Reference",
    description: "Integrate with our API",
    icon: Code2,
    topics: [
      "Authentication",
      "Projects API",
      "Deployments API",
      "Teams API",
      "Webhooks",
    ],
  },
  {
    title: "Guides",
    description: "Step-by-step tutorials",
    icon: FileText,
    topics: [
      "Framework Guides",
      "Database Integration",
      "Static Site Generation",
      "Serverless Functions",
      "Performance Optimization",
    ],
  },
  {
    title: "CLI Commands",
    description: "Common commands reference",
    icon: Command,
    topics: [
      "deploy init",
      "deploy dev",
      "deploy build",
      "deploy start",
      "deploy logs",
    ],
  },
];