import CardProductComments from "@/components/Cards/CardComments";
import CardProductDescription from "@/components/Cards/CardProductDescription";
import Button from "@/components/UI/Button";
import React from "react";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <div className="mb-6 px-4 py-6 md:py-4 md:mb-0 xl:mb-12 xl:px-6 xl:py-6">
        <CardProductDescription />
        <div className="mb-4 pb-4 border-b border-grey-stroke">
          <Button style="wide-secondary" type="button">
            Залишити свій коментар
          </Button>
        </div>
        <CardProductComments />
      </div>
    </>
  );
}
