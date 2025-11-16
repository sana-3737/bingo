"use client";
import { useBingo } from "../context/bingoContext";

export default function bingoNumberCard({ num }: { num: number }) {
  const { removeNumber } = useBingo();

  // 列ごとに色分け
  const getColor = (n: number) => {
    if (n <= 15) return "bg-red-200";   // B列
    if (n <= 30) return "bg-orange-200"; // I列
    if (n <= 45) return "bg-yellow-200"; // N列
    if (n <= 60) return "bg-green-200";  // G列
    return "bg-blue-200";                // O列
  };

  return (
    <div
      className={`rounded p-3 text-xl font-bold text-center cursor-pointer ${getColor(num)}`}
      onClick={() => removeNumber(num)}
      title="クリックで削除"
    >
      {num}
    </div>
  );
}