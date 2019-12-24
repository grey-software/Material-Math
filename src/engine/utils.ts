export function randomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function positiveRandomNum(max: number): number {
  return randomNum(1, max);
}
