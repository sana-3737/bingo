"use client";
import { useState } from "react";
import { useBingo } from "./context/bingoContext";

export default function PrizeTargetForm() {
  const { setPrizeTarget, setRemainingPrize, setHasPrizeTarget } = useBingo();
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const num = Number(value);
    if (Number.isInteger(num) && num > 0) {
      setPrizeTarget(num);
      setRemainingPrize(num);
      setHasPrizeTarget(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#8787af]">
      <div className="bg-white rounded p-6 w-80 shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">景品人数を入力してください</h2>
        <input
          type="number"
          min={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          className="w-full border rounded p-2 mb-3 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          決定
        </button>
      </div>
    </div>
  );
}