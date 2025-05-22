import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowRight, Globe, Zap, Shield, Code2, Boxes, Sparkles } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-accent" />
              <span className="ml-2 text-xl font-bold">Bolt Deploy</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-foreground-muted hover:text-foreground transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-foreground-muted hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link to="/docs" className="text-foreground-muted hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link to="/signup" className="text-foreground-muted hover:text-foreground transition-colors">
                Log in
              </Link>
              <Link
                to="/signup"
                className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg transition-colors"
              >
                Start Deploying
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent mb-8">
              <Sparkles size={16} className="mr-2" />
              <span>New: Automatic HTTPS and custom domains</span>
            </div>
            <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-foreground-muted bg-clip-text text-transparent">
              Deploy your projects
              <span className="text-accent"> instantly</span>
            </h1>
            <p className="mt-6 text-xl text-foreground-muted max-w-3xl mx-auto">
              Zero configuration deployment platform for your web projects.
              Push to GitHub and we'll handle the rest.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg text-lg font-medium transition-colors"
              >
                Deploy your first project
                <ArrowRight className="ml-2" />
              </Link>
              <a
                href="https://github.com/features"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-card border border-border hover:bg-card-hover text-foreground rounded-lg text-lg font-medium transition-colors"
              >
                <Github className="mr-2" />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Everything you need to deploy</h2>
              <p className="mt-4 text-foreground-muted text-lg">
                Built for developers, designed for teams
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors">
                <Globe className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-xl font-semibold">Global Edge Network</h3>
                <p className="mt-2 text-foreground-muted">
                  Deploy to our global edge network for maximum performance and reliability.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors">
                <Shield className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-xl font-semibold">Enterprise Security</h3>
                <p className="mt-2 text-foreground-muted">
                  Built-in SSL, DDoS protection, and enterprise-grade security features.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors">
                <Code2 className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-xl font-semibold">Framework Agnostic</h3>
                <p className="mt-2 text-foreground-muted">
                  Support for all major frameworks and static site generators.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-3xl font-bold">Trusted by developers worldwide</h2>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-accent">10k+</span>
                <span className="mt-2 text-foreground-muted">Developers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-accent">50k+</span>
                <span className="mt-2 text-foreground-muted">Deployments</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-accent">99.9%</span>
                <span className="mt-2 text-foreground-muted">Uptime</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-accent">5ms</span>
                <span className="mt-2 text-foreground-muted">Avg. Response</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-foreground-muted hover:text-foreground text-sm">Features</Link></li>
                <li><Link to="/pricing" className="text-foreground-muted hover:text-foreground text-sm">Pricing</Link></li>
                <li><Link to="/docs" className="text-foreground-muted hover:text-foreground text-sm">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-foreground-muted hover:text-foreground text-sm">About</Link></li>
                <li><Link to="/blog" className="text-foreground-muted hover:text-foreground text-sm">Blog</Link></li>
                <li><Link to="/careers" className="text-foreground-muted hover:text-foreground text-sm">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/templates" className="text-foreground-muted hover:text-foreground text-sm">Templates</Link></li>
                <li><Link to="/examples" className="text-foreground-muted hover:text-foreground text-sm">Examples</Link></li>
                <li><Link to="/guides" className="text-foreground-muted hover:text-foreground text-sm">Guides</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-foreground-muted hover:text-foreground text-sm">Privacy</Link></li>
                <li><Link to="/terms" className="text-foreground-muted hover:text-foreground text-sm">Terms</Link></li>
                <li><Link to="/security" className="text-foreground-muted hover:text-foreground text-sm">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
            <div className="flex items-center">
              <Zap className="h-6 w-6 text-accent" />
              <span className="ml-2 font-bold">Bolt Deploy</span>
            </div>
            <p className="text-sm text-foreground-muted">© 2024 Bolt Deploy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;