import { Delete } from "@mui/icons-material";
import { Avatar, Typography, IconButton } from "@mui/material";
import "./QueSong.css";
interface Iprops {
	song: { thumbnail: string; artist: string; title: string };
}
const QueSong = ({ song }: Iprops) => {
	const { artist, title, thumbnail } = song;
	return (
		<div className="container">
			<Avatar src={thumbnail} className="avatar" />
			<div className="songInfoContainer">
				<Typography variant="subtitle2" className="text">
					{title}
				</Typography>
				<Typography variant="body2" color="rosybrown" className="text">
					{artist}
				</Typography>
			</div>
			<IconButton>
				<Delete color="error" />
			</IconButton>
		</div>
	);
};

export default QueSong;
