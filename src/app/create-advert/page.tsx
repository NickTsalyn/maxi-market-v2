"use client";

import AdditionalInfo from "@/components/Form/AdditionaIInfo";
import PriceFormComp from "@/components/Form/PriceForm";

export interface PageProps {}

export default function Page({}: PageProps) {
  const handleDataChange = (data: any) => {
    console.log("Дані змінені:", data);
  };

  return (
    <div>
      {/* <PriceFormComp /> */}
      <AdditionalInfo onDataChange={handleDataChange} />
    </div>
  );
}
