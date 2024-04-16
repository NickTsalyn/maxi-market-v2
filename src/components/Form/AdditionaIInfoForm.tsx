"use client";

import React, { useState } from "react";
// import { Formik, Form, Field, FieldProps } from "formik";
import { RadioButton } from "../UI/RadioButton";
import BasicSelect from "../UI/Select";
import { MOCK_PRODUCT_COLORS } from "@/global/vars";

type Values = {
  activity: string;
  condition: string;
  color: string;
};
interface AdditionalInfoFormProps {
  onDataChange: (data: Values) => void;
}

export default function AdditionalInfoForm({
  onDataChange,
}: AdditionalInfoFormProps) {
  const [formData, setFormData] = useState<Values>({
    activity: "Приватно",
    condition: "Новий",
    color: "чорний",
  });
  const activityGroup1 = ["Приватно", "Бізнес"];
  const conditionGroup2 = [
    "Новий",
    "Ідеальний",
    "Дуже хороший",
    "Хороший",
    "Задовільний",
  ];

  const handleChange = (name: string, value: string) => {
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);
    onDataChange(updatedFormData);
  };

  return (
    <div className="py-3 px-2 md:p-6 flex flex-col justify-start items-start gap-8 bg-white shadow-middle">
      <h2 className="subtitle-1 text-tertiary">Додаткова інформація</h2>
      <div>
        <p className="mb-2 body-3 text-tertiary">Ваш спосіб діяльності:</p>
        <div className="flex flex-start gap-2">
          {activityGroup1.map((option) => (
            <RadioButton
              text={option}
              key={option}
              isActive={formData.activity === option}
              onClick={() => handleChange("activity", option)}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 body-3 text-tertiary">Стан товару:</p>
        <div className="flex flex-start gap-2 flex-wrap">
          {conditionGroup2.map((option) => (
            <RadioButton
              text={option}
              key={option}
              isActive={formData.condition === option}
              onClick={() => handleChange("condition", option)}
            />
          ))}
        </div>
      </div>

      <div className="w-full xl:w-[467px]">
        <BasicSelect
          value={formData.color}
          label="Колір товару:"
          onChange={(e) => handleChange("color", e.target.value as string)}
          items={MOCK_PRODUCT_COLORS}
          placeholder="Оберіть колір"
        />
      </div>
    </div>
  );
}

// export default function AdditionalInfoForm() {
//   const [color, setColor] = useState("");
//   const optionsGroup1 = ["Приватно", "Бізнес"];
//   const optionsGroup2 = [
//     "Новий",
//     "Ідеальний",
//     "Дуже хороший",
//     "Хороший",
//     "Задовільний",
//   ];

//   return (
//     <Formik<FormValues>
//       initialValues={{
//         option1: "Приватно",
//         option2: "Новий",
//         selectColor: "чорний",
//       }}
//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     >
//       {() => (
//         <Form>
//           <div className="py-3 px-2 md:p-6 flex flex-col justify-start items-start gap-8 bg-white shadow-middle">
//             <h2 className="subtitle-1 text-tertiary ">Додаткова інформація</h2>
//             <div>
//               <p className="pb-2 body-3 text-tertiary">
//                 Ваш спосіб діяльності:
//               </p>
//               <div className="flex flex-start gap-2">
//                 <Field name="option1">
//                   {(props: FieldProps<string>) => (
//                     <>
//                       {optionsGroup1.map((option) => (
//                         <RadioButton
//                           text={option}
//                           key={option}
//                           isActive={props.field.value === option}
//                           onClick={() =>
//                             props.form.setFieldValue("option1", option)
//                           }
//                         />
//                       ))}
//                     </>
//                   )}
//                 </Field>
//               </div>
//             </div>

//             <div>
//               <p className="pb-2 body-3 text-tertiary">Стан товару:</p>
//               <div className="flex flex-start gap-2 flex-wrap">
//                 <Field name="option2">
//                   {(props: FieldProps<string>) => (
//                     <>
//                       {optionsGroup2.map((option) => (
//                         <RadioButton
//                           text={option}
//                           key={option}
//                           isActive={props.field.value === option}
//                           onClick={() =>
//                             props.form.setFieldValue("option2", option)
//                           }
//                         />
//                       ))}
//                     </>
//                   )}
//                 </Field>
//               </div>
//             </div>

//             <div className="w-full xl:w-[467px]">
//               <Field name="selectColor">
//                 {(props: FieldProps<string>) => (
//                   <BasicSelect
//                     value={props.field.value}
//                     label="Колір товару:"
//                     onChange={(e) => {
//                       setColor(e.target.value as string);
//                       props.form.setFieldValue("selectColor", e.target.value)
//                     }}
//                     items={MOCK_PRODUCT_COLORS}
//                     placeholder="Оберіть колір"
//                   />
//                 )}
//               </Field>
//             </div>
//             <button type="submit">Submit</button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// }
