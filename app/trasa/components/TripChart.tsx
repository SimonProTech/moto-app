"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { TrendingUp, TrendingUpDown, TrendingUpIcon } from "lucide-react";
import { MotoRideName } from "@/types/app";

export const surfaceChartFill: Record<string, string> = {
  Górska: "fill-blue-600",
  Krajobrazowa: "fill-green-600",
  Miejska: "fill-orange-500",
  "Off-road": "fill-blue-600",
  Rekreacyjna: "fill-blue-600",
  Sportowa: "fill-red-600",
  Turystyczna: "fill-cyan-500",
  Wymagająca: "fill-purple-600",
};

const chartConfig = {
  elevation: {
    label: "Wysokość",
    color: "var(--chart-2)",
    icon: TrendingUpIcon,
  },
} satisfies ChartConfig;

interface TripChartProps {
  startingCity: string;
  endingCity: string;
  moto_ride_types: {
    moto_ride: MotoRideName;
  };
  elevationProfile:
    | {
        lat: number;
        lon: number;
        elevation: number;
        index: number;
      }[]
    | null;
}

export const TripChart = ({
  elevationProfile,
  startingCity,
  endingCity,
  moto_ride_types,
}: TripChartProps) => {
  if (!elevationProfile || elevationProfile.length === 0) return null;

  const data = elevationProfile.map((p) => ({
    index: p.index,
    elevation: p.elevation,
  }));

  const totalElevationGain = data.reduce((sum, point, i) => {
    if (i === 0) return sum;
    const diff = point.elevation - data[i - 1].elevation;
    return diff > 0 ? sum + diff : sum;
  }, 0);

  return (
    <Card className="shadow-lg border-1 border-gray-200">
      <CardHeader>
        <CardTitle>Profil wysokości trasy</CardTitle>
        <CardDescription>
          Od {startingCity} do {endingCity} — zmiana wysokości na całej trasie
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          className="aspect-auto h-[260px] w-full"
          config={chartConfig}
        >
          <AreaChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={30}
              tickCount={6}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  className="bg-my-white border border-gray-border"
                  indicator="line"
                />
              }
            />
            <Area
              dataKey="elevation"
              type="natural"
              className={`${surfaceChartFill[moto_ride_types.moto_ride]}`}
              fillOpacity={0.5}
              fill={`${surfaceChartFill[moto_ride_types.moto_ride]}`}
              fillRule="evenodd"
              stroke="var(--color-mobile)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-2 leading-none">
          <div className="flex items-center gap-2">
            Różnica wysokości start–meta:
            <span className="font-bold underline">
              {(
                ((data[data.length - 1].elevation - data[0].elevation) /
                  data[0].elevation) *
                100
              ).toFixed(2)}
              %
            </span>
            <TrendingUpDown size={15} />
          </div>
          <div className="flex gap-2 items-center">
            Przewyższenie całkowite:
            <span className="font-bold underline">{totalElevationGain} m</span>
            <TrendingUp className="h-4 w-4" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
