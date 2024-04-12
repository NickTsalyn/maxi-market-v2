"use client";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { IconClose } from "../Icons/Icons";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { Auth } from "@/types/interfaces";

import { login } from "@/redux/auth/operations";
import { useAppDispatch } from "@/redux/store";
import { FormEvent, useState } from "react";
export const validationSchema = yup.object().shape({
  login: yup
    .string()
    .required("Логін є обов'язковим полем")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Логін має бути у форматі електронної пошти"
    ),
  // .matches(/^[a-zA-Z0-9]+$/, 'Логін має містити лише букви та цифри без пробілів'),
  password: yup
    .string()
    .required("Пароль є обов'язковим полем")
    // .matches(
    //   /^[a-zA-Z0-9]+$/,
    //   "Пароль має містити лише букви та цифри без пробілів"
    // ),
});

export default function FormAuth() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
  // 	e.preventDefault;
  // 	console.log(email, password )
  // 	dispatch(login({ email, password }));
  // };

  const handleClose = () => {
    router.push("/");
  };

  return (
    <Formik<Auth>
      initialValues={{
        login: "",
        password: "",
      }}
      // validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        dispatch(login(values))
        // router.push("/")
        // Додано setSubmitting для встановлення isSubmitting вручну
        // setSubmitting(true); // Встановлюємо isSubmitting в true вручну
        // dispatch(login(values))
        //   .then(() => {
        //     console.log(values);
        //     setSubmitting(false); // Після завершення авторизації встановлюємо isSubmitting в false
        //     router.push("/"); // Перенаправлення після успішної авторизації
        //   })
        //   .catch(() => {
        //     setSubmitting(false); // Після помилки встановлюємо isSubmitting в false
        //   });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex justify-end w-full h-10 md:mb-6">
            <div onClick={handleClose} className="cursor-pointer">
              <IconClose />
            </div>
          </div>
          <div className="2xl:p-12">
            <h2 className="header-1 mb-2 text-center md:mb-4">Авторизація</h2>
            <p className="body-1 mb-6 text-center md:mb-8">
              Увійдіть, щоб додавати товари у Обране, писати продавцям і бачити
              свої замовлення
            </p>
            <div className="flex flex-col gap-2 mb-4 md:gap-8 md:mb-8">
              <Field
                as={Input}
                name="login"
                type="email"
                label="Ваш Email"
                placeholder="введіть Email"
                style="form"
                // onChange={(e: any) => console.log(e.target.value)}
              />
              <Field
                as={Input}
                name="password"
                type="password"
                label="Ваш Пароль"
                placeholder="введіть Пароль"
                style="form"
               
              />
            </div>
            <p
              className="body-1 mb-4 md:mb-8 cursor-pointer"
              onClick={() => router.push("/?modalContent=forgot")}
            >
              Забули пароль?
            </p>
            <div className="mb-4 md:mb-8">
              <Button
                style="wide-primary"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Зачекайте..." : "Увійти"}
              </Button>
            </div>
            <p className="body-1 text-center">
              Ще не зареєстровані{" "}
              <span
                onClick={() => router.push("/?modalContent=register")}
                className="text-secondary cursor-pointer"
              >
                Зареєструватися
              </span>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
}
// 		<form onSubmit={handleSumbit}>
// 			<div className="flex justify-end w-full h-10 md:mb-6">
// 				<div onClick={handleClose} className="cursor-pointer">
// 					<IconClose />
// 				</div>
// 			</div>
// 			<div className="2xl:p-12">
// 				<h2 className="header-1 mb-2 text-center md:mb-4">Авторизація</h2>
// 				<p className="body-1 mb-6 text-center md:mb-8">
// 					Увійдіть, щоб додавати товари у Обране, писати продавцям і бачити свої замовлення
// 				</p>
// 				<div className="flex flex-col gap-2 mb-4 md:gap-8 md:mb-8">
// 					<Input label="Ваш Email" placeholder="введіть Email" style="form" type="email" onChange={(e)=> console.log(e.target.value)} />
// 					<Input label="Ваш Пароль" placeholder="введіть Пароль" style="form" type="password" onChange={(e)=> setPassword(e.target.value)} />
// 				</div>
// 				<p className="body-1 mb-4 md:mb-8 cursor-pointer" onClick={() => router.push("/?modalContent=forgot")}>Забули пароль?</p>
// 				<div className="mb-4 md:mb-8">
// 					<Button style="wide-primary" type="submit">
// 						Увійти
// 					</Button>
// 				</div>
// 				<p className="body-1 text-center">
// 					Ще не зареєстровані{" "}
// 					<span onClick={() => router.push("/?modalContent=register")} className="text-secondary cursor-pointer">
// 						Зареєструватися
// 					</span>
// 				</p>
// 			</div>
// 		</form>
// 	);
// }
