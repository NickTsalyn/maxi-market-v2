import React from "react";
import { ProductCardFilter } from "@/types/interfaces";
import Image from "next/image";

type Props = {
	filterCards: ProductCardFilter[];
};

export const CardFilter = (props: Props) => {
	return (
		<ul>
			{props.filterCards.map((card, i) => (
				<li key={i}>
					<Image src={card.imgUrl} alt="card" />
					<h3>{card.name}</h3>
					<p>{card.description}</p>
					<p>{card.price}</p>
				</li>
			))}
		</ul>
	);
};
