import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { GET_SONGS } from "../graphql/queries";
const SongList = () => {
	// const [loading, setLoading] = useState<boolean>(true);
	const { loading, error, data } = useQuery(GET_SONGS);
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
