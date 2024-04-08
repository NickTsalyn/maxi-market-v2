import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

type BasicSelectProps = {
	value: string | number;
	label: string;
	onChange: (event: SelectChangeEvent<string | number>) => void;
	items: { value: string | number; label: string }[];
	placeholder: string;
};

export default function BasicSelect(props: BasicSelectProps) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};
	console.log(open);
	return (
		<Box sx={{ minWidth: 120 }}>
			<label className="block mb-2">{props.label}</label>
			<FormControl
				fullWidth
				sx={{
					border: "1px solid #D6D6D6",
					"& .MuiOutlinedInput-notchedOutline": {
						border: "none",
					},
					"&:hover .MuiOutlinedInput-notchedOutline": {
						border: "none",
					},
				}}
			>
				<Select
					id="demo-simple-select"
					value={props.value}
					displayEmpty
					inputProps={{ "aria-label": "Without label" }}
					onChange={props.onChange}
					open={open}
					onOpen={handleOpen}
					onClose={handleOpen}
					className=" bg-grey-bg-1 border-grey-stroke focus:border-grey-bg-1 placeholder:color-tertiary focus:outline-none"
					IconComponent={open ? KeyboardArrowUpIcon : KeyboardArrowDownIcon}
				>
					<MenuItem value="">
						<em className=" text-tertiary placeholder:color-tertiary not-italic">{props.placeholder}</em>
					</MenuItem>
					{props.items.map((item) => (
						<MenuItem key={item.value} value={item.value} className=" bg-white text-tertiary">
							{item.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
