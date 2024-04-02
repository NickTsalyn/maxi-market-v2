import { CardFilter } from "@/components/Cards/CardFilter";
import { MOCK_FILTER_CARDS } from "@/global/vars";
import React from "react";

export interface PageProps {}

export default function Page({}: PageProps) {
	return (
		<div>
			<CardFilter />
		</div>
	);
}
