import React from 'react'

import {
  BarChart,
  CartesianGrid,
  XAxis,
  Bar,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@simulador/components/ui/chart";

export default function ResultChars({ data, dataKey, label, color }) {
  const chartConfig = {
    [dataKey]: {
      label,
      color,
    },
  };

  return (
    <div className="ResultChars">
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="habitacion"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="valor" fill={"#4f46e5"} radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}