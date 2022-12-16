import QueList from "./QueList";
import {
	Card,
	CardContent,
	Typography,
	IconButton,
	Slider,
	CardMedia,
} from "@mui/material";
import { PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material";
import "./SongPlayer.css";
const SongPlayer = () => {
	return (
		<>
			<Card variant="outlined" className="container">
				<div className="details">
					<CardContent className="content">
						<Typography variant="h5" component="h3">
							Title
						</Typography>
						<Typography variant="subtitle1" component="p" color="pink">
							Artist
						</Typography>
					</CardContent>
					<div className="controls">
						<IconButton>
							<SkipPrevious />
						</IconButton>
						<IconButton>
							<PlayArrow className="playButton" />
						</IconButton>
						<IconButton>
							<SkipNext />
						</IconButton>
						<Typography variant="subtitle1" component="p">
							00:01:33
						</Typography>
					</div>
					<Slider min={0} max={1} step={0.01} />
				</div>
				<CardMedia image="" className="thumbnail" />
			</Card>
			<QueList />
		</>
	);
};

export default SongPlayer;
