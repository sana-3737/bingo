"use client";
import { useBingo } from "../context/bingoContext";

export default function bingoNumberCard({ num }: { num: number }) {
  const { removeNumber } = useBingo();

  // 列ごとに色分け (3桁Hexの近似色)
  const getColor = (n: number) => {
    if (n <= 15) return "#fcc";   // B列 (red-200に近い)
    if (n <= 30) return "#fda"; // I列 (orange-200に近い)
    if (n <= 45) return "#fe8"; // N列 (yellow-200に近い)
    if (n <= 60) return "#bfc";  // G列 (green-200に近い)
    return "#bdf";                // O列 (blue-200に近い)
  };

  return (
    <div
      className="aspect-square rounded p-3 text-xl font-bold text-center cursor-pointer flex items-center justify-center"
      style={{ backgroundColor: getColor(num) }}
    >
    <span className="text-4xl font-extrabold">{num}</span>
    </div>

  );
}