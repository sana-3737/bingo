"use client";
import { useState } from "react";
import { useBingo } from "../context/bingoContext";

export default function BingoButton() {
  const { remainingPrize, setRemainingPrize } = useBingo();
  const [isBingo, setIsBingo] = useState(false);

  const handleClick = () => {
    setIsBingo(true);
    if (remainingPrize > 0) {
      setRemainingPrize(remainingPrize - 1);
    }
    setTimeout(() => setIsBingo(false), 3000); // 3秒後に消える
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleClick}
        className="bg-[#8787af] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#dcdcf0] transition"
      >
        BINGO!
      </button>

      {isBingo && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/50 z-50">
          <div className="bg-[#8787af] z-50 text-[8rem] font-extrabold text-white animate-bounce px-8 py-6 rounded-3xl shadow-lg">
            <div>BINGO!</div>
          </div>
        </div>
      )}
    </div>
  );
}