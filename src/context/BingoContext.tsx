"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { bingoContextType } from "./bingoContextType";

const BingoContext = createContext<bingoContextType | undefined>(undefined);

export function BingoProvider({ children }: { children: ReactNode }) {
  // 状態管理はここに全部書く
  const [prizeTarget, setPrizeTarget] = useState<number>(0);
  const [remainingPrize, setRemainingPrize] = useState<number>(0);
  const [hasPrizeTarget, setHasPrizeTarget] = useState(false);
  const [enteredNumbers, setEnteredNumbers] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBingoEffect, setShowBingoEffect] = useState(false);

  const addNumber = (num: number) => {
    if (num < 1 || num > 75) return;
    if (!enteredNumbers.includes(num)) {
      setEnteredNumbers((prev) => [...prev, num]);
    }
  };
  const removeNumber = (num: number) =>
    setEnteredNumbers((prev) => prev.filter((n) => n !== num));

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const triggerBingo = () => {
    if (remainingPrize > 0) setRemainingPrize((prev) => prev - 1);
    setShowBingoEffect(true);
    setTimeout(() => setShowBingoEffect(false), 2000);
  };

  return (
    <BingoContext.Provider
      value={{
        prizeTarget,
        setPrizeTarget,
        remainingPrize,
        setRemainingPrize,
        hasPrizeTarget,
        setHasPrizeTarget,
        enteredNumbers,
        addNumber,
        removeNumber,
        isModalOpen,
        openModal,
        closeModal,
        showBingoEffect,
        triggerBingo,
      }}
    >
      {children}
    </BingoContext.Provider>
  );
}

export function useBingo() {
  const context = useContext(BingoContext);
  if (!context) {
    throw new Error("useBingo must be used within a BingoProvider");
  }
  return context;
}