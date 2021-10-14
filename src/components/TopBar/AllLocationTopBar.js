import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
import {FiChevronLeft} from 'react-icons/fi'

function EditLocationTopBarComponent({editLocationFunc}) {
    return (
        <div className="topbar_area">
            <div className="container">
            <Link to="/location" style={{ textDecoration: 'none' }}>
                <div className="backbtn_style">
                    <FiChevronLeft color="#55575b" size={20}/>
                    <button className="go_back_btn">Go back</button>
                </div>
            </Link>
            <p className="top_title">All locations </p>
                <div className="action_btn">
                    <button onClick={editLocationFunc}>Edit Location</button>
                </div>
            </div>
        </div>
    )

}

export default EditLocationTopBarComponent