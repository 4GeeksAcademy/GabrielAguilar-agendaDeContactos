import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/form.css";


export const Form = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const inputNombre = (eName) =>{
		setName(eName.target.value)
		
	};

	const inputMail = (eMail) =>{
		setMail(eMail.target.value)
		
	};

	const inputPhone = (ePhone) =>{
		setPhone(ePhone.target.value)
		
	};

	const inputAddress = (eAddress) =>{
		setAddress(eAddress.target.value)
		
	};





	const handleSave = () =>{
		actions.addContact({
			full_name: name,
			email: mail, 
			phone: phone,
			address: address,
			
	});
		setName("");
		setMail("");
		setPhone("");
		setAddress("");
	}

	return (
        <>
            <div className="container text-center">
                <h1>Add a new contact</h1>
            </div>

            <div className=" row ms-5 p-3">
                <div className="col-12">
                    <label>Full name</label>
                </div>
                <div className="col-12 ">
                    <input className="inputs mx-auto" onChange={inputNombre} value={name} placeholder="Full name"></input>
                </div>

                <div className="col-12 mt-3">
                    <label>Email</label>
                </div>
                <div className="col-12">
                    <input className="inputs mx-auto" onChange={inputMail} value={mail} placeholder="Email"></input>
                </div>

                <div className="col-12 mt-3">
                    <label>Phone</label>
                </div>
                <div className="col-12">
                    <input className="inputs mx-auto" onChange={inputPhone} value={phone} placeholder="Phone"></input>
                </div>

                <div className="col-12 mt-3">
                    <label>Address</label>
                </div>
                <div className="col-12">
                    <input className="inputs mx-auto" onChange={inputAddress} value={address} placeholder="Address"></input>
                </div>

                <div className="col-12 mt-3">
                    <button className="saveButton" style={{width:"90%"}} onClick={handleSave}>Save</button>
                </div>

                <div className="container mt-3">
                    <Link to="/">
                        <button className="saveButton">Return to contacs</button>
                    </Link>
                </div>
            </div>
        </>
    );
};