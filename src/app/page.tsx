"use client";
import { useBingo } from "../context/bingoContext";
import PrizeTargetForm from "@/components/prizeTargetForm";
import NumberCard from "@/components/bingoNumberCard";
import BingoNumberModal from "@/components/bingoNumberModal";
import BingoButton from "@/components/bingoButton";

export default function BingoPage() {
  const {
    hasPrizeTarget,
    enteredNumbers,
    isModalOpen,
    closeModal,
    remainingPrize,
    openModal,
  } = useBingo();

  if (!hasPrizeTarget) {
    return <PrizeTargetForm />;
  }

  return (
    <div className="p-6">
      {/* 残り人数とボタンを横並びに */}
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-bold">あと {remainingPrize} 人</h2>
        <button
          onClick={openModal}
          className="bg-[#8787af] text-white px-4 py-2 rounded font-semibold shadow"
        >
          数字入力
        </button>
        <BingoButton /> {/* ← コンポーネント化したボタンを呼び出す */}
      </div>

      {/* カード一覧 */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        {[...enteredNumbers].reverse().map((num) => (
          <NumberCard key={num} num={num} />
        ))}
      </div>

      {/* モーダル表示 */}
      {isModalOpen && <BingoNumberModal onClose={closeModal} />}
    </div>
  );
}