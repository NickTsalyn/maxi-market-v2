"use client";

import { PhoneInput } from "react-international-phone";
import Input from "../UI/Input";
import { useState } from "react";

export default function ContactInfoForm() {
  const [phone, setPhone] = useState("");
  return (
    <div className="py-3 px-2 md:p-6 flex flex-col justify-start items-start gap-8 bg-white shadow-middle">
      <h2 className="subtitle-1 text-tertiary">Контактна інформація</h2>
      <div className="w-full xl:w-[467px]">
        <Input
          style="add-form"
          type="text"
          label="Вкажіть Ваше ім'я:"
          placeholder="Ваше ім'я"
        />
      </div>

      <div className="w-full xl:w-[467px] body-3">
        {/* <Input
          style="add-form"
          type="tel"
          label="Вкажіть Ваш номер телефону:"
        /> */}
        <label className=" text-tertiary">
          Номер телефону
          <PhoneInput
            defaultCountry="ua"
            onChange={(phone) => setPhone(phone)}
            className=" mt-2 bg-grey-bg-1"
            inputClassName="w-full outline-none h-[53px] p-4 border-[1px] border-grey-stroke rounded focus:border-tertiary focus:placeholder:text-grey-stroke invalid:border-danger invalid:placeholder:text-danger"
            countrySelectorStyleProps={{
              buttonClassName:
                "outline-none bg-#F6F6F6 p-4 h-[53px] border-[1px] border-grey-stroke rounded focus:border-tertiary focus:placeholder:text-grey-stroke invalid:border-danger invalid:placeholder:text-danger",
            }}
          />
        </label>
      </div>

      <div className="w-full xl:w-[467px]">
        <Input
          style="add-form"
          type="text"
          label="Оберіть місцезнаходження товару:"
        />
      </div>
    </div>
  );
}
