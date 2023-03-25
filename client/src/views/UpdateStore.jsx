import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import StoreForm from "../components/StoreForm";

import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";

const UpdateStore = () => {
	const [updateStoreInfo, setUpdateStoreInfo] = useState();
	const [editErr, setEditErr] = useState({});
	const nav = useNavigate();

	const { id } = useParams();
	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/stores/${id}`)
			.then(
				(res) => (
					console.log("updateStoreInfo", res.data), setUpdateStoreInfo(res.data)
				)
			)
			.catch((err) => console.log(err));
	}, []);

	const editStore = (editInfo) => {
		axios
			.put(`http://localhost:8080/api/stores/edit/${id}`, editInfo)
			.then((res) => (console.log(res.data), nav(`/store/${id}`)))
			.catch(
				(err) => (
					console.log("edit err", err.response.data.error.errors),
					setEditErr(err.response.data.error.errors)
				)
			);
	};
	return (
		<div>
			<Navbar />
			<Link to={"/"}>
				<button className="custom-btn btn-16 home-btn">
					<CottageTwoToneIcon />
				</button>
			</Link>
			<div className="updateStore">
				<h3>Edit this store!</h3>
				{updateStoreInfo && (
					<StoreForm
						submitForm={editStore}
						errMsg={editErr}
						store={updateStoreInfo}
					/>
				)}
			</div>
		</div>
	);
};

export default UpdateStore;
