import React, { useEffect } from 'react'
import "./allLocations.css"
import TopBar from '../../components/TopBar/AllLocationTopBar'
import { useSelector } from "react-redux"
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { removeLocationAction } from '../../redux/slices/locationSlice'

const EditLocation = () => {
    const dispatch = useDispatch()
    const editLocation = (e) => {
        e.preventDefault()
    }
    const locationState = useSelector(state => state.locations)

    
    const deleteLocation = (id) => {
        dispatch(
            removeLocationAction({id:id})
        )
    }
    const showEditLocation = () =>{

    }
    useEffect(() => {
        return locationState
    })
    return (
        <div className="allLocation_area">
            <div className="topbar">
                <TopBar editLocationFunc={editLocation} />
            </div>
            <div className="allLocation_container">
                <div className="allLocation_heading">
                    <h1>My Locations</h1>
                    <div className="allLocation_list">
                        {
                            locationState.map((item) => {
                                return (
                                    <div key={item.id} className="list_item">
                                        <div className="item_block">
                                            <div className="item_column">
                                                <div className="icon_container">
                                                    <IoMdCheckmarkCircleOutline />
                                                </div>
                                                <div className="location_data">
                                                    <p className="name">{item.name}</p>
                                                    <p className="address">{item.address}</p>
                                                    <p className="category">#{item.category}</p>
                                                </div>
                                            </div>
                                            <div className="action_btns">
                                                <button className="delete-btn" onClick={() => { deleteLocation(item.id) }}>Remove</button>
                                                <button className="edit-btn" onClick={() => { showEditLocation(item.id, item.name) }}>Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditLocation
