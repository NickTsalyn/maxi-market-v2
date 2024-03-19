import Image from "next/image";
import { IconArrowBlue, IconOrderAscend } from "../Icons/Icons";
import Button from "../UI/Button";
import avatar from '../../img/avatar.png'

type Props = {
};

export default function CardSeller(props: Props) {
	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-base font-medium md:text-lg md:font-semibold">Продавець</h3>
			<div className="flex flex-row items-center gap-2">
				<Image src={avatar} alt="avatar" width={40} height={40} />
				<span className=" body-2 md:text-base">Олександра</span>
			</div>
			<div className="flex flex-row items-center gap-2">
				<IconOrderAscend />
				<p className="body-2 xl:text-base">100% виконаних замовлень</p>
			</div>
			<p className="body-2 xl:text-base">Зареєстрований на сайті з жовтень 2020</p>
			<div className="flex flex-row items-center mr-1">
				<p className="body-2 text-secondary xl:text-base">Показати інші пропозиції продавця</p>
				<Button style="favourite" type="button">
					<IconArrowBlue />
				</Button>
			</div>
			<Button style="wide-secondary" type="button">Показати номер</Button>
		</div>
	);
}
