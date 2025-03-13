"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/common/components/ui/chart";

export function VehicleCategory({ cv, pv, tw }) {
  const chartData = [
    {
      browser: "Commercial Vehicles",
      visitors: cv,
      fill: "var(--color-chrome)",
    },
    { browser: "Private Vehicles", visitors: pv, fill: "var(--color-safari)" },
    { browser: "Two Wheelers", visitors: tw, fill: "var(--color-firefox)" },
  ];

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
  };
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Vehicle Category</CardTitle>
        <CardDescription>According to Current Data</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <ul className="text-center">
          <li>
            <span className="font-medium">Commercial Vehicles : </span>
            <span className="text-sm text-primary">{cv}</span>
          </li>
          <li>
            <span className="font-medium">Private Vehicles : </span>
            <span className="text-sm text-primary">{pv}</span>
          </li>
          <li>
            <span className="font-medium">Two Wheelers : </span>
            <span className="text-sm text-primary">{tw}</span>
          </li>
        </ul>
      </CardFooter>
    </Card>
  );
}
