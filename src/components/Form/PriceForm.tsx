"use client";
import { useState } from "react";
import { RadioButton } from "../UI/RadioButton";

export default function PriceFormComp() {
    const [activeButton, setActiveButton] = useState<string>('');

    const handleButtonClick = (buttonName: string) => {
      setActiveButton(buttonName);
      console.log(buttonName)
    };

	return (
		<div className="flex gap-2">
			<RadioButton text="Ціна" isActive={activeButton === 'Ціна'} onClick={() => handleButtonClick('Ціна')}/>
            <RadioButton text="Безкоштовно" isActive={activeButton === 'Безкоштовно'}  onClick={() => handleButtonClick('Безкоштовно')}/>
            <RadioButton text="Обмін" isActive={activeButton === 'Обмін'} onClick={() => handleButtonClick('Обмін')}/>
		</div>
	);
}
