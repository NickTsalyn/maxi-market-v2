import SwiperAdwert from "@/components/Swiper/SwiperAdwert";
import CardProductComments from "@/components/Cards/CardComments";
import CardOverview from "@/components/Cards/CardOverview";
import CardProductDescription from "@/components/Cards/CardProductDescription";
import CardSeller from "@/components/Cards/CardSeller";
import Button from "@/components/UI/Button";
import React from "react";

export interface PageProps {}

export default function Page({}: PageProps) {

  return (
    <div>
      <CardProductDescription />
      <CardSeller />
      <SwiperAdwert/>
      <div className="px-4 py-6 md:py-4 xl:px-6 xl:py-6">
        <CardOverview />
        <div className=" py-4 border-b border-grey-stroke">
          <Button style="wide-secondary" type="button">
            Залишити свій коментар
          </Button>
        </div>
        <CardProductComments />
      </div>
    </div>
  );

}

