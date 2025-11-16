"use client";
import { useBingo } from "@/context/bingoContext";
import PrizeTargetForm from "@/components/prizeTagetForm";

export default function BingoPage() {
  const { hasPrizeTarget, remainingPrize } = useBingo();

  if (!hasPrizeTarget) {
    return <PrizeTargetForm />;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">あと {remainingPrize} 人</h2>
      {/* ここに数字カードやモーダルを追加していく */}
    </div>
  );
}