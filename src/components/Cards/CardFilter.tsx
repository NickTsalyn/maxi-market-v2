import React from "react";
import Image from "next/image";
import { MOCK_FILTER_CARDS } from "@/global/vars";


export const CardFilter = () => {
	return (
		<ul>
			{MOCK_FILTER_CARDS.map((card, i) => (
				<li key={i}>
					<Image src={card.imgUrl} alt="card" width={300} height={300}/>
					<h3>{card.name}</h3>
					<p>{card.description}</p>
					<p>{card.price}</p>
				</li>
			))}
		</ul>
	);
};
