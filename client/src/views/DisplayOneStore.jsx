import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";

const DisplayOneStore = () => {
	const [oneStore, setOneStore] = useState({});
	const { id } = useParams();
	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/stores/${id}`)
			.then((res) => (console.log(res.data), setOneStore(res.data)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<Navbar />
			<Link to={"/"}>
				<button className="custom-btn btn-16 home-btn">
					<CottageTwoToneIcon />
				</button>
			</Link>
			<div className="displayStore">
				<img
					src="https://mydesktopwalls.com/wp-content/uploads/2020/06/Demon-Slayer-4k-Wallpaper-2020.jpg"
					alt="Demon Slayers"
				/>
				<div className="displayStore_headers">
					<h3>{oneStore.storeName}</h3>
					<h3>Store #{oneStore.storeNumber}</h3>
					<h3>Status: {oneStore.storeStatus ? "Open" : "Close"}</h3>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic
					vel animi recusandae. Assumenda voluptatibus architecto dolores veniam
					aliquam repellat eum atque sint. Iure accusantium laboriosam at
					incidunt voluptatum, ex exercitationem aliquid quod provident nisi!
				</p>
				<Link to={`/store/edit/${id}`}>
					<button className="custom-btn btn-16 edit-btn">
						<BorderColorTwoToneIcon />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default DisplayOneStore;
