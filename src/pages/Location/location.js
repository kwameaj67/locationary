import React, { useState } from 'react';
import './location.css'
import TopBar from '../../components/TopBar/LocationTopBar'

const LocationPage = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    return (
        <div className="location_area">
            <div className="topbar">
                <TopBar />
            </div>
            <div className="location_container">
                <div className="location_heading">
                    <h1>New Location</h1>
                    <p>Add new locations of your choice.⚡️</p>
                    <input className="input" type="default" placeholder="Enter name of location" autoComplete="false" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input className="input" type="default" placeholder="Enter an address" autoComplete="false" name="address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                    <select className="select_input" placeholder="Select category" required="true" >
                        <option hidden="true">Select category</option>
                        <option value="Tech Enthusiast"> Tech Enthusiast </option>
                        <option value="Frontend Dev"> Frontend Dev </option>
                        <option value="Backend Dev"> Backend Dev </option>
                        <option value="Mobile Dev"> Mobile Dev </option>
                        <option value="UI/UX Design"> UI/UX Design </option>
                        <option value="Graphics Design"> Graphics Design </option>
                        <option value="Data Science/Machine Learning"> Data Science/Machine Learning </option>
                        <option value="Cyber Security"> Cyber Security </option>
                        <option value="Fullstack Dev"> Fullstack Dev </option>
                        <option value="Technical Writing"> Technical Writing </option>
                    </select>
                </div>
                <div className="location_list_container">
                    <h1>List of location</h1>

                </div>
            </div>
        </div>
    )
}

export default LocationPage;