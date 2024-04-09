import AdditionalInfoForm from "@/components/Form/AdditionaIInfoForm";
import PriceFormComp from "@/components/Form/PriceForm";

export interface PageProps {}

export default function Page({}: PageProps) {

	return (
		<div>
			{/* <PriceFormComp /> */}
			<AdditionalInfoForm/>
		</div>
	);
}
