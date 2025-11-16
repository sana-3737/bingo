"use client";
import { useBingo } from "./context/bingoContext";

export default function header() {
  const { openModal } = useBingo();

  return (
    <header className="flex justify-between items-center p-4 bg-[#8787af] text-white">
      <h1 className="text-3xl font-bold">BINGO!</h1>
      <button
        onClick={openModal}
        className="bg-white text-blue-600 px-4 py-2 rounded font-semibold shadow"
      >
        数字入力
      </button>
    </header>
  );
}