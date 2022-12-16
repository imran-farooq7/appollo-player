import QueList from "./QueList";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { SkipPrevious } from "@mui/icons-material";
const SongPlayer = () => {
	return (
		<>
			<Card variant="outlined">
				<div>
					<CardContent>
						<Typography variant="h5" component="h3">
							Title
						</Typography>
						<Typography variant="subtitle1" component="p" color="pink">
							Artist
						</Typography>
					</CardContent>
					<div>
						<IconButton>
							<SkipPrevious />
						</IconButton>
					</div>
				</div>
			</Card>
			<QueList />
		</>
	);
};

export default SongPlayer;
