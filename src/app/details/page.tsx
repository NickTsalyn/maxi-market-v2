import CardProductDescription from "@/components/Cards/CardProductDescription";
import CardSeller from "@/components/Cards/CardSeller";
import React from "react";

export interface PageProps {}

export default function Page({}: PageProps) {
	return (
		<div>
			<CardProductDescription />
      <CardSeller/>
		</div>
	);
}
