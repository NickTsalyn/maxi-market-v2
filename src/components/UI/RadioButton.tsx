import React from "react";

type RadioButtonProps = {
	text: string;
	isActive: boolean;
	onClick: () => void;
};

export const RadioButton = (props: RadioButtonProps) => {
	const { text, isActive, onClick } = props;

	return (
		<button
			className={` px-8 py-3 md:w-[140px]flex justify-center items-center rounded body-2 md:subtitle-2 ${
				isActive ? "bg-quaternary text-white" : "bg-grey-bg-1 text-grey-inactive"
			} h-12`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};
