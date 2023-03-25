import React, { useState } from "react";
import { Link } from "react-router-dom";
import DoNotDisturbAltTwoToneIcon from "@mui/icons-material/DoNotDisturbAltTwoTone";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const StoreForm = ({ submitForm, store, errMsg }) => {
	const [storeName, setStoreName] = useState(store.storeName);
	const [storeNumber, setStoreNumber] = useState(store.storeNumber);
	const [storeStatus, setStoreStatus] = useState(store.storeStatus);

	const handleSubmit = (e) => {
		e.preventDefault();
		submitForm({ storeName, storeNumber, storeStatus });
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="inputName">
					<label>
						Store Name:
						{errMsg.storeName && (
							<p style={{ color: "red" }}>{errMsg.storeName.message}</p>
						)}
					</label>
					<input
						type="text"
						onChange={(e) => setStoreName(e.target.value)}
						value={storeName}
					/>
				</div>
				<div className="inputNum">
					<label>
						Store Number:
						{errMsg.storeNumber && (
							<p style={{ color: "red" }}>{errMsg.storeNumber.message}</p>
						)}
					</label>
					<input
						type="number"
						onChange={(e) => setStoreNumber(e.target.value)}
						value={storeNumber}
					/>
				</div>
				<div className="inputStatus">
					{errMsg.storeStatus && (
						<p style={{ color: "red" }}>{errMsg.storeStatus.message}</p>
					)}
					<input
						type="checkbox"
						onChange={(e) => setStoreStatus(e.target.checked)}
						checked={storeStatus}
					/>{" "}
					open?
				</div>
				<Link to={"/"}>
					<button className="custom-btn btn-16">
						<DoNotDisturbAltTwoToneIcon />
					</button>
				</Link>
				<button className="custom-btn btn-16">
					<DoneOutlineIcon />
				</button>
			</form>
		</div>
	);
};

export default StoreForm;
