"use client";
import { useBingo } from "@/context/bingoContext";
import PrizeTargetForm from "@/components/prizeTargetForm";
import NumberCard from "@/components/bingoNumberCard";
import BingoNumberModal from "@/components/bingoNumberModal";

export default function BingoPage() {
  const {
    hasPrizeTarget,
    enteredNumbers,
    isModalOpen,
    closeModal,
    remainingPrize,
  } = useBingo();

  if (!hasPrizeTarget) {
    return <PrizeTargetForm />;
  }

  return (
    <div className="p-6">
      {/* 残り人数の表示 */}
      <h2 className="text-2xl font-bold mb-4">あと {remainingPrize} 人</h2>

      {/* ←ここがカード一覧の部分！ */}
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