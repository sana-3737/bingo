"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
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
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8001');
    ws.onopen = () => {
      console.log('WebSocket connected');
    };
    ws.onmessage = (event) => {
      console.log('Message from server:', event.data);
    };
    ws.onclose = () => {
      console.log('WebSocket disconnected');
    };
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    setWebsocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const addNumber = (num: number) => {
    if (num < 1 || num > 75) return;
    if (!enteredNumbers.includes(num)) {
      setEnteredNumbers((prev) => [...prev, num]);
      if (websocket && websocket.readyState === WebSocket.OPEN) {
        if(num <= 15){
          websocket.send('F00#');
        setTimeout(() => {
          websocket.send(`000#`);
        }, 2000);
        } else if(num <= 30){
          websocket.send('FA0#');
        setTimeout(() => {
          websocket.send(`000#`);
        }, 2000);
        } else if(num <= 45){
          websocket.send('FF0#');
        setTimeout(() => {
          websocket.send(`000#`);
        }, 2000);
        } else if(num <= 60){
          websocket.send('0F0#');
        setTimeout(() => {
          websocket.send(`000#`);
        }, 2000);
        } else {
          websocket.send('00F#');
        setTimeout(() => {
          websocket.send(`000#`);
        }
        , 2000);
        }
      }
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
        websocket,
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