import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import Navbar from "../components/Navbar";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";

const Dashboard = () => {
	const [stores, setStores] = useState();
	useEffect(() => {
		axios
			.get("http://localhost:8080/api")
			.then((res) => (console.log(res.data), setStores(res.data)))
			.catch((err) => console.log(err));
	}, []);

	const removeFromDom = (storeId) => {
		setStores(stores.filter((store) => store._id !== storeId));
	};
	return (
		<div>
			<Navbar />
			<p className="sub_header">Find stores in your area</p>
			<table>
				<thead>
					<th>#</th>
					<th>Store</th>
					<th>Store Number</th>
					<th>Open</th>
					<th>Remove</th>
				</thead>
				<tbody>
					{stores && (
						<>
							{stores.map((store, i) => (
								<tr key={i}>
									<td>
										<p>{i + 1}</p>
									</td>
									<td className="storeLink">
										<Link to={`/store/${store._id}`}>{store.storeName}</Link>
									</td>
									<td>{store.storeNumber}</td>
									<td>{store.storeStatus ? "True" : "False"}</td>
									<td>
										{store.storeStatus ? (
											<DeleteButton
												delId={store._id}
												successCallback={() => removeFromDom(store._id)}
											/>
										) : (
											""
										)}
									</td>
								</tr>
							))}
						</>
					)}
				</tbody>
			</table>
			<Link to={"/store/add"}>
				<button className="custom-btn btn-16 addBtn">
					<AddBusinessTwoToneIcon />
				</button>
			</Link>
		</div>
	);
};

export default Dashboard;
