"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { category: "Bastidores", views: 186, fill: "var(--color-bastidores)" },
  { category: "Entrevistas", views: 305, fill: "var(--color-entrevistas)" },
  { category: "Gols", views: 237, fill: "var(--color-gols)" },
  { category: "Histórico", views: 73, fill: "var(--color-historico)" },
  { category: "Treinos", views: 209, fill: "var(--color-treinos)" },
]

const chartConfig = {
  views: {
    label: "Visualizações",
  },
  bastidores: {
    label: "Bastidores",
    color: "hsl(var(--chart-1))",
  },
  entrevistas: {
    label: "Entrevistas",
    color: "hsl(var(--chart-2))",
  },
  gols: {
    label: "Gols",
    color: "hsl(var(--chart-3))",
  },
  historico: {
    label: "Histórico",
    color: "hsl(var(--chart-4))",
  },
   treinos: {
    label: "Treinos",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function ContentViewsChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
         <YAxis />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="views" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
