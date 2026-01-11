import { haversine } from "@/helpers/open-meteo-helpers/haversine";

interface SamplePolylineT {
  points: [number, number][];
  interval: number;
}

export const samplePolyline = ({ points, interval }: SamplePolylineT) => {
  const sampled = [];
  let acc = 0;

  sampled.push(points[0]);

  for (let i = 1; i < points.length; i++) {
    const dist = haversine({ one: points[i - 1], two: points[i] });
    acc += dist;

    if (acc >= interval) {
      sampled.push(points[i]);
      acc = 0;
    }
  }

  if (sampled[sampled.length - 1] !== points[points.length - 1]) {
    sampled.push(points[points.length - 1]);
  }

  return sampled;
};
