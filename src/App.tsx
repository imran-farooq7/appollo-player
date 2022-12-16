import { Grid } from "@mui/material";
import AddSong from "./components/AddSong";
import Header from "./components/Header";
import QueList from "./components/QueList";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";

const App = () => {
	return (
		<>
			<Header />
			<Grid
				container
				spacing={3}
				sx={{
					paddingTop: "4rem",
				}}
			>
				<Grid item xs={12} md={7}>
					<AddSong />
					<SongList />
				</Grid>
				<Grid
					style={{
						position: "fixed",
						width: "100%",
						top: "70px",
						right: "1rem",
					}}
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
