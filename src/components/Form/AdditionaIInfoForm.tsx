"use client";

import React from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import { RadioButton } from "../UI/RadioButton";
import BasicSelect from "../UI/Select";

interface FormValues {
  option1: string;
  option2: string;
  selectOption: string;
}

export default function AdditionalInfoForm() {
  const optionsGroup1 = ["Приватно", "Бізнес"];
  const optionsGroup2 = [
    "Новий",
    "Ідеальний",
    "Дуже хороший",
    "Хороший",
    "Задовільний",
  ];

  return (
    <Formik<FormValues>
      initialValues={{
        option1: "Приватно",
        option2: "Новий",
        selectOption: "Київ, Україна",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <div className="py-4 px-2 md:p-6 flex flex-col justify-start items-start gap-8 bg-white shadow-middle">
            <h2 className="subtitle-1 text-tertiary ">Додаткова інформація</h2>
            <div>
              <p className="body-3 text-tertiary">Ваш спосіб діяльності:</p>
              <Field name="option1">
                {(props: FieldProps<string>) => (
                  <>
                    {optionsGroup1.map((option) => (
                      <RadioButton
                        text={option}
                        key={option}
                        isActive={props.field.value === option}
                        onClick={() =>
                          props.form.setFieldValue("option1", option)
                        }
                      />
                    ))}
                  </>
                )}
              </Field>
            </div>

            <div>
              <p className="body-3 text-tertiary">Стан товару:</p>
              <Field name="option2">
                {(props: FieldProps<string>) => (
                  <>
                    {optionsGroup2.map((option) => (
                      <RadioButton
                        text={option}
                        key={option}
                        isActive={props.field.value === option}
                        onClick={() =>
                          props.form.setFieldValue("option2", option)
                        }
                      />
                    ))}
                  </>
                )}
              </Field>
            </div>

            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}



{
  /* <div>
              <Field name="selectOption">
                {({ field }) => (
                  <BasicSelect
                    value={field.value}
                    label="Оберіть місце знаходження товару:"
                    onChange={(e) => field.onChange(e.target.value)}
                    items={[
                      { value: "option1", label: "Опція 1" },
                      { value: "option2", label: "Опція 2" },
                    ]}
                    placeholder="Оберіть опцію"
                  />
                )}
              </Field>
            </div> */
}
