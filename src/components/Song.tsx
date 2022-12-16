import { PlayArrow, Save } from "@mui/icons-material";
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	IconButton,
} from "@mui/material";
interface Iprops {
	thumbnail: string;
	title: string;
}
const Song = (props: Iprops) => {
	return (
		<Card>
			<div
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<CardMedia
					image={props.thumbnail}
					sx={{ objectFit: "cover", width: "140px", height: "140px" }}
				/>
				<div
					style={{ width: "100%", display: "flex", justifyContent: "center" }}
				>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{props.title}
						</Typography>
						<Typography variant="body1" component="p" color="white">
							{props.title}
						</Typography>
					</CardContent>
					<CardActions>
						<IconButton size="small" color="primary">
							<PlayArrow />
						</IconButton>
						<IconButton size="small" color="secondary">
							<Save />
						</IconButton>
					</CardActions>
				</div>
			</div>
		</Card>
	);
};

export default Song;
