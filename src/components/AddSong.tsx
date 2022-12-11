import {
	Button,
	InputAdornment,
	TextField,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from "@mui/material";
import { useState } from "react";
import { AddCircleOutlineOutlined, Link } from "@mui/icons-material";

const AddSong = () => {
	const [dialog, setDialog] = useState<boolean>(false);
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
			}}
		>
			<Dialog open={dialog} onClose={() => setDialog(false)}>
				<DialogTitle>Edit Song</DialogTitle>
				<DialogContent>
					<img
						src="https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png"
						alt="mobile"
					/>
					<TextField margin="dense" name="title" label="Title" fullWidth />
					<TextField margin="dense" name="artist" label="Artist" fullWidth />
					<TextField
						margin="dense"
						name="thumbnail"
						label="Thumbnail"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button variant="outlined" color="primary">
						Add Song
					</Button>
					<Button
						variant="outlined"
						color="warning"
						onClick={() => setDialog(!dialog)}
					>
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
			<TextField
				placeholder="add youtube or sound cloud link"
				type="url"
				fullWidth
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Link />
						</InputAdornment>
					),
				}}
				sx={{ marginRight: "1rem" }}
			/>
			<Button
				variant="contained"
				color="primary"
				endIcon={<AddCircleOutlineOutlined />}
				onClick={() => setDialog(!dialog)}
			>
				Add
			</Button>
		</div>
	);
};

export default AddSong;
