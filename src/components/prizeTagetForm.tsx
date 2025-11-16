"use client";
import { useState } from "react";
import { useBingo } from "@/context/bingoContext";

export default function prizeTargetForm() {
  const { setPrizeTarget, setRemainingPrize, setHasPrizeTarget } = useBingo();
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const num = Number(value);
    if (num > 0) {
      setPrizeTarget(num);
      setRemainingPrize(num); // 残り人数も同じ値で初期化
      setHasPrizeTarget(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#8787af] text-white">
      <h2 className="text-2xl mb-4">景品人数を入力してください</h2>
      <input
        type="number"
        min={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="text-black rounded p-2 mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-white text-blue-600 px-4 py-2 rounded font-semibold shadow"
      >
        決定
      </button>
    </div>
  );
}