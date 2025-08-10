// src/context/CalcContext.tsx
import React, { createContext, useContext, useState, type ReactNode } from "react";

interface Traveler {
  id: number;
  age: number;
  firstname: string;
  lastname: string;
  isBuy: boolean;
}

interface Buyer {
  first_name: string;
  last_name: string;
  email: { value: string }[];
  TIN?: string;
}

interface CalcData {
  startDate?: Date;
  endDate?: Date;
  dayCheck?: boolean;
  travelers?: Traveler[];
  police?: Buyer;
  calculatedPremium?: number;
  calculatedPremiumWithActi?: number;
  calculatedPremiumRUB?: number;
  calculatedPremiumRUBWithActi?: number;
  calculatedCurrency?: string;
  cover?: any;
  additionalRisks?: any[];
  MULTIdays?: any[];
  activeService?: boolean;
  calculatePayload?: any;
  calculatePayloadWithService?: any;
}

interface CalcContextType {
  calcData: CalcData;
  setCalcData: React.Dispatch<React.SetStateAction<CalcData>>;
  tourists: any;
  setTourists: React.Dispatch<React.SetStateAction<any>>;
}

const defaultCalcData: CalcData = {
  startDate: undefined,
  endDate: undefined,
  dayCheck: false,
  travelers: [],                    // <-- MUHIM: bo'sh array
  police: { first_name: "", last_name: "", email: [] }, // minimal struktura
  calculatedPremium: undefined,
  calculatedPremiumWithActi: undefined,
  calculatedPremiumRUB: undefined,
  calculatedPremiumRUBWithActi: undefined,
  calculatedCurrency: undefined,
  cover: undefined,
  additionalRisks: [],
  MULTIdays: [],
  activeService: false,
  calculatePayload: undefined,
  calculatePayloadWithService: undefined
};

const CalcContext = createContext<CalcContextType | undefined>(undefined);

export const CalcProvider = ({ children }: { children: ReactNode }) => {
  const [calcData, setCalcData] = useState<CalcData>(defaultCalcData);
  const [tourists, setTourists] = useState<any>([]);
  return (
    <CalcContext.Provider value={{
        calcData, setCalcData,
        tourists, setTourists
    }}>
      {children}
    </CalcContext.Provider>
  );
};

export const useCalcContext = () => {
  const context = useContext(CalcContext);
  if (!context) {
    throw new Error("useCalcContext must be used inside CalcProvider");
  }
  return context;
};
