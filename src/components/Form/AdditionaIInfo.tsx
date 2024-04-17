"use client";

import React, { useState } from "react";
import { RadioButton } from "../UI/RadioButton";
import BasicSelect from "../UI/Select";
import { MOCK_PRODUCT_COLORS } from "@/global/vars";

type Values = {
  activity: string;
  condition: string;
  color: string;
};

interface AdditionalInfoProps {
  onDataChange: (data: Values) => void;
}

export default function AdditionalInfo({ onDataChange }: AdditionalInfoProps) {
  const [formData, setFormData] = useState<Values>({
    activity: "Приватно",
    condition: "Новий",
    color: "чорний",
  });
  const activityGroup1 = ["Приватно", "Бізнес"];
  const conditionGroup2 = [
    "Новий",
    "Ідеальний",
    "Дуже хороший",
    "Хороший",
    "Задовільний",
  ];

  const handleChange = (name: string, value: string) => {
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);
    onDataChange(updatedFormData);
  };

  return (
    <div className="py-3 px-2 md:p-6 flex flex-col justify-start items-start gap-8 bg-white shadow-middle">
      <h2 className="subtitle-1 text-tertiary">Додаткова інформація</h2>
      <div>
        <p className="pb-2 body-3 text-tertiary">Ваш спосіб діяльності:</p>
        <div className="flex flex-start gap-2">
          {activityGroup1.map((option) => (
            <RadioButton
              text={option}
              key={option}
              isActive={formData.activity === option}
              onClick={() => handleChange("activity", option)}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="pb-2 body-3 text-tertiary">Стан товару:</p>
        <div className="flex flex-start gap-2 flex-wrap">
          {conditionGroup2.map((option) => (
            <RadioButton
              text={option}
              key={option}
              isActive={formData.condition === option}
              onClick={() => handleChange("condition", option)}
            />
          ))}
        </div>
      </div>

      <div className="w-full xl:w-[467px]">
        <BasicSelect
          value={formData.color}
          label="Колір товару:"
          onChange={(e) => handleChange("color", e.target.value as string)}
          items={MOCK_PRODUCT_COLORS}
          placeholder="Оберіть колір"
        />
      </div>
    </div>
  );
}
