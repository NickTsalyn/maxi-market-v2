"use client";

import { useRouter } from "next/navigation";
import { IconArrowGrey } from "../Icons/Icons";
import Button from "../UI/Button";
import Input from "../UI/Input";

export default function ForgotPassword() {
	const router = useRouter();

	const handleSumbit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSumbit}>
			<div className="flex justify-start w-10 h-10 md:mb-6">
				<div className="flex justify-center cursor-pointer w-10 h-10" onClick={() => router.back()}>
					<IconArrowGrey/>
				</div>
			</div>
			<div className="2xl:p-12">
				<h2 className="header-1 mb-2 text-center md:mb-4">Забули пароль?</h2>
				<p className="body-1 mb-6 md:mb-8">
					Яка електронна пошта або номер телефону зв&apos;язані з вашим профілем?
				</p>
				<div className="flex flex-col gap-2 mb-4 md:gap-8 md:mb-8">
					<Input label="Куди надіслати Вам пароль?" placeholder="введіть Email" style="form" type="email" />
				</div>
				<div className="mb-4 md:mb-8">
					<Button style="wide-primary" type="submit">
						Змінити
					</Button>
				</div>
			</div>
		</form>
	);
}
