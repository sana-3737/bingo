"use client";
import { useState } from "react";
import { useBingo } from "./context/bingoContext";

export default function bingoNumberModal({ onClose }: { onClose: () => void }) {
  const { addNumber } = useBingo();
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const num = Number(value);
    if (Number.isInteger(num) && num >= 1 && num <= 75) {
      addNumber(num);
      setValue("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded p-6 w-80">
        <h2 className="text-xl font-bold mb-4">数字入力</h2>
        <input
          type="number"
          min={1}
          max={75}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
          if (e.key === "Enter") {
          handleSubmit();
          }
          }}
         className="w-full border rounded p-2 mb-3 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"/>

        <div className="flex gap-2 justify-end">
          <button className="px-3 py-2 rounded bg-gray-200" onClick={onClose}>
            キャンセル
          </button>
          <button className="px-3 py-2 rounded bg-blue-600 text-white" onClick={handleSubmit}>
            追加
          </button>
        </div>
      </div>
    </div>
  );
}