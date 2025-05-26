"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";

interface AnalyticsCardProps {
  title: string;
  value: string;
  description: string;
  data: any[];
  dataKey: string;
  color: string;
  valuePrefix?: string;
  valueSuffix?: string;
}

export function AnalyticsCard({
  title,
  value,
  description,
  data,
  dataKey,
  color,
  valuePrefix = "",
  valueSuffix = ""
}: AnalyticsCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {valuePrefix}{value}{valueSuffix}
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
        <div className="h-[80px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis 
                dataKey="date" 
                hide 
              />
              <YAxis hide />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            {payload[0].payload.date}
                          </span>
                          <span className="font-bold text-sm">
                            {valuePrefix}{payload[0].value}{valueSuffix}
                          </span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                fill={color}
                strokeWidth={2}
                fillOpacity={0.2}
                activeDot={{
                  r: 4,
                  strokeWidth: 0,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}