import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className={`flex flex-col ${plan.featured ? 'border-primary shadow-lg' : ''}`}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard" className="w-full">
                    <Button 
                      className="w-full" 
                      variant={plan.featured ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-2">Enterprise Plan</h2>
            <p className="text-muted-foreground mb-4">
              Need a custom solution? Let's talk about your specific requirements.
            </p>
            <Link href="/contact-sales">
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const plans = [
  {
    name: "Hobby",
    description: "Perfect for side projects and experiments",
    price: "0",
    features: [
      "Up to 3 projects",
      "1 team member",
      "Basic analytics",
      "Community support",
      "Automatic HTTPS",
    ],
  },
  {
    name: "Pro",
    description: "For professional developers and small teams",
    price: "19",
    featured: true,
    features: [
      "Unlimited projects",
      "Up to 5 team members",
      "Advanced analytics",
      "Priority support",
      "Custom domains",
      "Password protection",
      "Preview deployments",
    ],
  },
  {
    name: "Team",
    description: "For growing teams and organizations",
    price: "49",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "SAML SSO",
      "Audit logs",
      "24/7 support",
      "SLA",
      "Advanced security",
    ],
  },
];