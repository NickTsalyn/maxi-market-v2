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
			className={` px-8 py-4 md:w-[140px]flex justify-center items-center rounded-l body-2 md:subtitle-2 ${
				isActive ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-500"
			} h-12`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};
