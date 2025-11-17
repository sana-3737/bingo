"use client";
import { useBingo } from "../context/bingoContext";

export default function Header() {
  return (
    <header className="flex justify-center items-center p-4 bg-[#8787af] text-white">
      <h1 className="text-7xl font-bold">BINGO!</h1>
    </header>
  );
}