	"use client";
	import { Formik, Form, Field } from 'formik';
	import { useRouter } from "next/navigation";
	import { IconClose } from "../Icons/Icons";
	import Button from "../UI/Button";
	import Input from "../UI/Input";
	import { Auth } from '@/types/interfaces';
	
	import { login } from '@/redux/auth/operations';
import { useAppDispatch } from '@/redux/store';
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    login: yup.string()
        .required('Логін є обов\'язковим полем')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Логін має бути у форматі електронної пошти'),

        
    password: yup.string()
        .required('Пароль є обов\'язковим полем')
    
});


	export default function FormAuth() {
		const router = useRouter();
		const dispatch = useAppDispatch();
		

		const handleSumbit = (values:Auth) => {
			console.log(values)
			dispatch(login(values))
		};

		const handleClose = () => {
			router.push("/");
		};

		return (
			
				<Formik<Auth>
				initialValues={{
					login: '',
					password: '',
				}}
				// validationSchema={validationSchema}
				onSubmit={(values, ) => { 
				
					console.log(values)
					dispatch(login(values))
					router.push("/");
					
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
						Увійдіть, щоб додавати товари у Обране, писати продавцям і бачити свої замовлення
						</p>
						<div className="flex flex-col gap-2 mb-4 md:gap-8 md:mb-8">
						<Field
							name="login"
							type="email"
							label="Ваш Email"
							placeholder="введіть Email"
							style='form'
							as={Input}
						/>
						<Field
							name="password"
							type="password"
							label="Ваш Пароль"
							placeholder="введіть Пароль"
							style='form' 
							as={Input}
						/>
						</div>
						<p
						className="body-1 mb-4 md:mb-8 cursor-pointer"
						onClick={() => router.push('/?modalContent=forgot')}
						>
						Забули пароль?
						</p>
						<div className="mb-4 md:mb-8">
						<Button style="wide-primary" type="submit" disabled={isSubmitting}>
							{isSubmitting ? 'Зачекайте...' : 'Увійти'}
						</Button>
						</div>
						<p className="body-1 text-center">
						Ще не зареєстровані{' '}
						<span
							onClick={() => router.push('/?modalContent=register')}
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
		
			// <form onSubmit={handleSumbit}>
			// 	<div className="flex justify-end w-full h-10 md:mb-6">
			// 		<div onClick={handleClose} className="cursor-pointer">
			// 			<IconClose />
			// 		</div>
			// 	</div>
			// 	<div className="2xl:p-12">
			// 		<h2 className="header-1 mb-2 text-center md:mb-4">Авторизація</h2>
			// 		<p className="body-1 mb-6 text-center md:mb-8">
			// 			Увійдіть, щоб додавати товари у Обране, писати продавцям і бачити свої замовлення
			// 		</p>
			// 		<div className="flex flex-col gap-2 mb-4 md:gap-8 md:mb-8">
			// 			<Input label="Ваш Email" placeholder="введіть Email" style="form" type="email" />
			// 			<Input label="Ваш Пароль" placeholder="введіть Пароль" style="form" type="password" />
			// 		</div>
			// 		<p className="body-1 mb-4 md:mb-8 cursor-pointer" onClick={() => router.push("/?modalContent=forgot")}>Забули пароль?</p>
			// 		<div className="mb-4 md:mb-8">
			// 			<Button style="wide-primary" type="submit">
			// 				Увійти
			// 			</Button>
			// 		</div>
			// 		<p className="body-1 text-center">
			// 			Ще не зареєстровані{" "}
			// 			<span onClick={() => router.push("/?modalContent=register")} className="text-secondary cursor-pointer">
			// 				Зареєструватися
			// 			</span>
			// 		</p>
			// 	</div>
			// </form>
	// 	);
	// }
	
