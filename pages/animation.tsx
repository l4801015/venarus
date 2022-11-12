import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const mapFromSystemToSystem =
  (start1: number, stop1: number, start2: number, stop2: number) =>
  (value: number): number =>
    Math.floor(
      start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
    );
const mapX = mapFromSystemToSystem(-1, 1, 0, 350);
const mapY = mapFromSystemToSystem(-1, 1, 0, 75); // 75
const toRad = (deg: number) => (deg * Math.PI) / 180;
const toDeg = (rad: number) => (rad * 180) / Math.PI;
const vector = (x: number, y: number) => [x, y];
const sin = (rad: number) => Math.sin(rad);
const cos = (rad: number) => Math.cos(rad);
const tan = (sin: number, cos: number) => sin / cos;
const matrixProd = (A: any, B: any): number[][] =>
  A.map((row: any, i: number) =>
    B[0].map((_: any, j: number) =>
      row.reduce((acc: any, _: any, n: number) => acc + A[i][n] * B[n][j], 0)
    )
  );

const Animation: NextPage = () => {
  const [start, setStart] = useState(true);
  const [theta, setTheta] = useState<number>(0);
  const rotationMatrix = [
    [cos(toRad(theta)), sin(toRad(theta))],
    [-sin(toRad(theta)), cos(toRad(theta))],
  ];
  const triangle = [
    vector(cos(toRad(0)), sin(toRad(0))),
    vector(cos(toRad(120)), sin(toRad(120))),
    vector(cos(toRad(240)), sin(toRad(240))),
  ];

  const requestRef = useRef<any>();
  const previousTimeRef = useRef<any>();

  const animate = (time: any) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;

      //setCount((prevCount) => (prevCount + deltaTime * 0.01) % 100);
      setTheta((prevTheta) => prevTheta);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const rotatedTriangle = matrixProd(triangle, rotationMatrix);


  const vertex1 = rotatedTriangle[0];
  const vertex2 = rotatedTriangle[1];
  const vertex3 = rotatedTriangle[2];

  const translate = (vertex: number[]) => {
    const x = mapX(vertex[1]);
    const y = mapY(vertex[0]);
    const c = vertex[0] > 0 ? true : false
    return {
      "z-index": `${c ? 100 : 10}`,
      transform: `translateX(${x}px) translateY(${y}px) scale(${c ? 1 : .5})`,
      "will-change": "transform",
    }
  }

    

  return (
    <>
      <div>
        <div className="relative l-96 w-[374px] h-[374px]">
          <div className="absolute w-[374px] h-[374px]" style={translate(vertex1)}>
            <Image src="/1.png" layout="fill" />
          </div>
          <div className="absolute w-[374px] h-[374px]" style={translate(vertex2)}>
            <Image src="/2.png" layout="fill" />
          </div>
          <div className="absolute w-[374px] h-[374px]" style={translate(vertex3)}>
            <Image src="/3.png" layout="fill" />
          </div>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Left
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Right
      </button>
    </>
  );
};

export default Animation;
