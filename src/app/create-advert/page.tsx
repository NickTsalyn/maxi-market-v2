'use client';

import AdditionalInfoForm from "@/components/Form/AdditionaIInfoForm";
import PriceFormComp from "@/components/Form/PriceForm";

export interface PageProps {}

export default function Page({}: PageProps) {
	const handleDataChange = (data: any) => {console.log("Дані змінені:", data);
		// Тут ви можете робити що завгодно зі зміненими даними, наприклад, зберігати їх у стані батьківського компонента
	  };
	
	return (
		<div>
			{/* <PriceFormComp /> */}
			<AdditionalInfoForm onDataChange={handleDataChange}/>
		</div>
	);
}
