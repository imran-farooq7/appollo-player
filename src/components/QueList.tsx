import { Typography, useMediaQuery, useTheme } from "@mui/material";

const QueList = () => {
	const theme = useTheme();
	const greaterThanMd = useMediaQuery(theme.breakpoints.up("md"));
	return (
		greaterThanMd && (
			<div
				style={{
					margin: "1rem 0",
				}}
			>
				<Typography variant="button" color="pink">
					QUEUE (5)
				</Typography>
			</div>
		)
	);
};

export default QueList;
