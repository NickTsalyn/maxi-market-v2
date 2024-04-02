import React from "react";
// import { ProductCardFilter } from "@/types/interfaces";
import { MOCK_FILTER_CARDS } from "@/global/vars";
import Image from "next/image";
import Button from "../UI/Button";



export const CardFilter = () => {
	return (
		<ul className=" grid gap-4 justify-center md:grid-cols-3 md:gap-6 xl:grid-cols-4">
			{MOCK_FILTER_CARDS.map((card, i) => (
				<li key={i} className="flex flex-col gap-4 border-[1px] rounded w-full min-w-[213px] max-w-[362px]">
					<Image src={card.imgUrl} alt="card" width={400} height={400} />
					<div className=" flex flex-col flex-auto  justify-between">
						<h3 className="subtitle-1 ">{card.name}</h3>
						<p className="body-2">{card.description}</p>
						<p className=" subtitle-2 ">{card.price} грн</p>
						<div className=" w-1/2">
							<Button style="primary-card" type="button">
								Детальніше
							</Button>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};
