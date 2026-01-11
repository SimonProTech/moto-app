interface LimitPointsT<T> {
  points: T[];
  max: number;
}

export const limitPoints = <T>({ points, max }: LimitPointsT<T>): T[] => {
  if (points.length <= max) return points;

  const step = Math.ceil(points.length / max);
  return points.filter((_, i) => i % step === 0).slice(0, max);
};
