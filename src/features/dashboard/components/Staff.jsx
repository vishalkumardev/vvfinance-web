import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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

export function Staff({ telecaller, agent, officeStaff }) {
  const chartData = [
    {
      browser: "Telecaller",
      visitors: telecaller,
      fill: "var(--color-chrome)",
    },
    { browser: "Repo Agent", visitors: agent, fill: "var(--color-safari)" },
    {
      browser: "Office Staff",
      visitors: officeStaff,
      fill: "var(--color-firefox)",
    },
  ];

  const chartConfig = {
    visitors: {
      label: "Staff",
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

  const staff = agent + telecaller + officeStaff;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle> Staff</CardTitle>
        <CardDescription>Current Staff</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {staff}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Staff
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <CardFooter className="flex-col gap-2 text-sm">
          <ul className="text-center">
            <li>
              <span className="font-medium">Telecallers : </span>
              <span className="text-sm text-primary">{telecaller}</span>
            </li>
            <li>
              <span className="font-medium">Repo Agents : </span>
              <span className="text-sm text-primary">{agent}</span>
            </li>
            <li>
              <span className="font-medium">Office Staff : </span>
              <span className="text-sm text-primary">{officeStaff}</span>
            </li>
          </ul>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
