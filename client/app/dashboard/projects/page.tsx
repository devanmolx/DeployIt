import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import Projects from "@/components/dashboard/projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNav />
      <div className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Projects</h1>
            <p className="text-muted-foreground">
              Manage and deploy your projects
            </p>
          </div>
          <Link href="/dashboard/new-project" className="mt-4 md:mt-0">
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> New Project
            </Button>
          </Link>
        </div>

        <Card>
          <Projects/>
        </Card>
      </div>
    </div>
  );
}