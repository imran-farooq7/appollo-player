import { Grid, useMediaQuery, useTheme, Hidden } from "@mui/material";
import AddSong from "./components/AddSong";
import Header from "./components/Header";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";

const App = () => {
	const theme = useTheme();
	const greaterThanMd = useMediaQuery(theme.breakpoints.up("md"));
	const greaterThanSm = useMediaQuery(theme.breakpoints.up("sm"));
	// console.log(matches)
	return (
		<>
			<Hidden only={"xs"}>
				<Header />
			</Hidden>

			<Grid
				container
				spacing={3}
				sx={
					greaterThanSm
						? {
								paddingTop: "4rem",
						  }
						: {
								paddingTop: "0",
						  }
				}
			>
				<Grid item xs={12} md={7}>
					<AddSong />
					<SongList />
				</Grid>
				<Grid
					style={
						greaterThanMd
							? {
									position: "fixed",
									width: "100%",
									top: "70px",
									right: "1rem",
							  }
							: { position: "fixed", width: "100%", left: "0", bottom: "0" }
					}
					item
					xs={12}
					md={5}
				>
					<SongPlayer />
				</Grid>
			</Grid>
		</>
	);
};

export default App;
