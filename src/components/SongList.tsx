import { CircularProgress } from "@mui/material";
import { useState } from "react";
const SongList = () => {
	const [loading, setLoading] = useState<boolean>(true);
	if (loading) {
		return (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					marginTop: "20px",
				}}
			>
				<CircularProgress />
			</div>
		);
	}
	return <div>SongList</div>;
};

export default SongList;
