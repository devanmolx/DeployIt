import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { AnalyticsCard } from "@/components/dashboard/analytics-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { analyticsData } from "@/lib/data";

export default function AnalyticsPage() {
  // Calculate totals
  const totalDeployments = analyticsData.deployments.reduce((sum, item) => sum + item.count, 0);
  const totalVisitors = analyticsData.visitors.reduce((sum, item) => sum + item.count, 0);
  const totalBandwidth = analyticsData.bandwidth.reduce((sum, item) => sum + item.gb, 0).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNav />
      <div className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Analytics</h1>
          <p className="text-muted-foreground">
            Monitor your application performance and usage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <AnalyticsCard 
            title="Total Deployments"
            value={totalDeployments.toString()}
            description="Total deployments this week"
            data={analyticsData.deployments}
            dataKey="count"
            color="hsl(var(--chart-1))"
          />
          <AnalyticsCard 
            title="Total Visitors"
            value={totalVisitors.toString()}
            description="Unique visitors this week"
            data={analyticsData.visitors}
            dataKey="count"
            color="hsl(var(--chart-2))"
          />
          <AnalyticsCard 
            title="Bandwidth Usage"
            value={totalBandwidth}
            description="Total bandwidth used this week"
            data={analyticsData.bandwidth}
            dataKey="gb"
            color="hsl(var(--chart-3))"
            valueSuffix=" GB"
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analytics</CardTitle>
              <CardDescription>
                Coming soon: Detailed analytics and insights for your projects
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">
                We're working on bringing you more detailed analytics. Check back soon!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}