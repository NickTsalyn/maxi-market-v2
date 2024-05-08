"use client";

import AdditionalInfo from "@/components/Form/AdditionaIInfo";
// import PriceFormComp from "@/components/Form/PriceForm";
import ContactInfoForm from "@/components/Form/ContactInfoForm";

export interface PageProps {}

export default function Page({}: PageProps) {
  const handleDataChange = (data: any) => {
    console.log("Дані змінені:", data);
    // обробка даних
  };

  return (
    <>
      <h1 className="header-1 mb-7 text-tertiary">Створити оголошення</h1>
      <div className="flex flex-col gap-4">
        {/* <PriceFormComp /> */}
        <AdditionalInfo onDataChange={handleDataChange} />
        <ContactInfoForm onDataChange={handleDataChange} />
      </div>
    </>
  );
}
