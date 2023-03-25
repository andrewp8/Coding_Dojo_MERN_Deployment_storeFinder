import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import StoreForm from "../components/StoreForm";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";

const AddStore = () => {
	const [createErr, setCreateErr] = useState({});
	const nav = useNavigate();

	const createStore = (newStore) => {
		console.log("from create store", newStore);
		axios
			.post("http://localhost:8080/api/stores/add", newStore)
			.then((res) => {
				console.log(res);
				const newId = res.data._id;

				nav(`/store/${newId}`);
			})
			.catch(
				(err) => (
					console.log("create err", err.response.data.error.errors.name),
					setCreateErr(err.response.data.error.errors)
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
			<div className="addStore">
				<h3>Add a new Store!</h3>
				<StoreForm
					submitForm={createStore}
					errMsg={createErr}
					store={{ storeName: "", storeNumber: "", storeStatus: false }}
				/>
			</div>
		</div>
	);
};

export default AddStore;
