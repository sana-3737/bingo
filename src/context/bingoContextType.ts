export type bingoContextType = {
  prizeTarget: number;
  setPrizeTarget: (num: number) => void;

  remainingPrize: number;
  setRemainingPrize: (num: number) => void;

  hasPrizeTarget: boolean;
  setHasPrizeTarget: (flag: boolean) => void;

  enteredNumbers: number[];
  addNumber: (num: number) => void;
  removeNumber: (num: number) => void;

  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;

  showBingoEffect: boolean;
  triggerBingo: () => void;
};