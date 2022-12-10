import { AppBar, Toolbar, Typography } from "@mui/material";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Header = () => {
	return (
		<AppBar position="fixed" style={{ background: "pink" }}>
			<Toolbar>
				<PlayCircleIcon />
				<Typography variant="h6" component="h1" sx={{ marginLeft: "10px" }}>
					Appollo Player
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
