import axios from "axios";
import React from "react";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

const DeleteButton = ({ delId, successCallback }) => {
	const handleDelete = () => {
		axios
			.delete(`http://localhost:8080/api/stores/${delId}`)
			.then((res) => (console.log(res.data), successCallback()))
			.catch((err) => console.log(err));
	};

	return (
		<button onClick={handleDelete} className="custom-btn btn-16">
			<DeleteForeverTwoToneIcon />
		</button>
	);
};

export default DeleteButton;
