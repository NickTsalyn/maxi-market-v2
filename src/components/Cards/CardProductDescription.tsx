import { IconFavouriteBlack } from "../Icons/Icons";
import Button from "../UI/Button";

type Props = {};

export default function CardProductDescription(props: Props) {
	return (
		<div className=" flex flex-col gap-4 md:gap-6">
			<div className="flex justify-between items-center">
				<h3 className=" text-base font-medium xl:text-lg xl:font-semibold">Рюкзак &quot;Експлорер&quot;</h3>
				<Button style="favourite" type="button">
					<IconFavouriteBlack/>
				</Button>
			</div>
			<span className="body-2">опубліковано вчора о 13:43</span>
			<h3 className="header-3">
				1500 <span className="text-base ">грн</span>
			</h3>
			<Button style="wide-primary" type="submit">Купити</Button>
		</div>
	);
}
