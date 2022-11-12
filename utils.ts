import { useReducer } from "react";

export const toRad = (deg: number) => (deg * Math.PI) / 180;
export const Toggle = () => {
    const [isOpen, toggleIsOpen] = useReducer((state: boolean) => !state, false);
    return { isOpen, toggleIsOpen };
  };
export const toDeg = (rad: number) => (rad * 180) / Math.PI;
export const mapFromSystemToSystem =
  (start1: number, stop1: number, start2: number, stop2: number) =>
  (value: number): number =>
    Math.floor(
      start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
    );
export const vector = (x: number, y: number) => [x, y];
export const v2 = (x: number, y: number) => [x, y, 1];
export const sin = (rad: number) => Math.sin(rad);
export const cos = (rad: number) => Math.cos(rad);
export const matrixProd = (A: any, B: any): number[][] =>
  A.map((row: any, i: number) =>
    B[0].map((_: any, j: number) =>
      row.reduce((acc: any, _: any, n: number) => acc + A[i][n] * B[n][j], 0)
    )
  );
export const isLess =
  (n: number | null) =>
  (m: number | null): boolean =>
    n === null || m === null ? false : m < n;
export const less600 = isLess(600);
export const less850 = isLess(850);
export const less1100 = isLess(1100);
export const greater760 = (height: number) => height > 760;
export const setHeight = (width: number, height: number) =>
  less600(width)
    ? 240
    : less850(width)
    ? 440
    : less1100(width)
    ? 640
    : greater760(height)
    ? 760
    : height;
export const not = (b: boolean) => !b;
