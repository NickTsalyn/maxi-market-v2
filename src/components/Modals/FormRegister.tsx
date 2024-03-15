"use client";

import { useRouter } from "next/navigation";
import { IconClose } from "../Icons/Icons";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { ChangeEvent, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface PhoneProps {
	label: string;
}

export default function FormRegister() {
	const [phone, setPhone] = useState("");
	const router = useRouter();

	const handleSumbit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	const handleClose = () => {
		router.push("/");
	};

	return (
		<form onSubmit={handleSumbit}>
			<div className="flex justify-end w-full h-10 md:mb-6 ">
				<div onClick={handleClose} className="cursor-pointer">
					<IconClose />
				</div>
			</div>
			<div className="2xl:p-12">
				<h2 className="header-1 mb-2 text-center md:mb-4">Реєстрація</h2>
				<p className="body-1 mb-6 text-center md:mb-8">Заповніть всі поля нижче, щоб створити свій профіль</p>
				<div className="flex flex-col gap-2 mb-4 md:gap-2 md:mb-8 xl:mb-6">
					<Input label="Ваше ім'я" placeholder="введіть ім'я" style="form" type="text" />
					<Input label="Ваше прізвище" placeholder="введіть прізвище" style="form" type="text" />
					<label className=" text-sm text-tertiary">
						Номер телефону
						<PhoneInput
							defaultCountry="ua"
							onChange={(phone) => setPhone(phone)}
							className=" mt-2"
							inputClassName="w-full outline-none bg-transparent h-[53px] p-4 border-2 border-grey-stroke rounded focus:border-tertiary focus:placeholder:text-grey-stroke invalid:border-danger invalid:placeholder:text-danger"
							countrySelectorStyleProps={{
								buttonClassName:
									"outline-none bg-transparent p-4 h-[53px] border-2 border-grey-stroke rounded focus:border-tertiary focus:placeholder:text-grey-stroke invalid:border-danger invalid:placeholder:text-danger",
							}}
						/>
					</label>

					<Input label="Ваш Email" placeholder="введіть Email" style="form" type="email" />
					<Input label="Ваш Пароль" placeholder="введіть Пароль" style="form" type="password" />
					<Input label="Повторіть пароль" placeholder="введіть Пароль" style="form" type="password" />
				</div>
				<p className=" text-sm mb-4 md:mb-8">
					Реєструючись, ви погоджуєтеся з{" "}
					<span className=" text-secondary">угодою користувача і політикою конфіденційності </span>
					маркетплейсу
				</p>
				<div className="mb-4 md:mb-8">
					<Button style="wide-primary" type="submit">
						Увійти
					</Button>
				</div>
				<p className="body-1 text-center">
					Вже зареєстровані?{" "}
					<span onClick={() => router.push("/?modalContent=auth")} className="text-secondary cursor-pointer">
						Увійдіть
					</span>
				</p>
			</div>
		</form>
	);
}
