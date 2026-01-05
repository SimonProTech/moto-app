export const calculateTime = (speed: number, distance: number) => {
  return Math.round((distance / speed) * 60);
};
