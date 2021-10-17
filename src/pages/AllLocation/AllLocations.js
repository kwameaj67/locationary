import React, { useState, useEffect } from 'react'
import "./allLocations.css"
import TopBar from '../../components/TopBar/AllLocationTopBar'
import { useSelector } from "react-redux"
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { removeLocationAction, editLocationAction } from '../../redux/slices/locationSlice'
import Maps from '../../components/Map/Maps'
import { Marker, InfoWindow } from '@react-google-maps/api'
import moment from 'moment'
import { toaster } from 'evergreen-ui'

const AllLocations = () => {
    const dispatch = useDispatch()
    // states for editing
    const [ID, setID] = useState(null)
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [category, setCategory] = useState("")
    const [coordinates, setCoordinates] = useState({})
    // const [newEditMarker, setEditMarker] = useState({})
    const [selectedMarker, setSelectedMarker] = useState(null)
    const [editing, setEditing] = useState(false)
    const [showErrorMsg, setShowErrorMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const locationState = useSelector(state => state.locations)

    const categoryState = useSelector((state) => state.categories)
    // const filteredLocations = locationState.filter(loc => loc.category === category)


    const deleteLocation = (id) => {
        dispatch(
            removeLocationAction({ id: id })
        )
        toaster.success("You've successfully removed a location.")
    }
    const showEditLocation = (item) => {
        console.log(item)
        setEditing(true)
        setID(item.id)
        setName(item.name)
        setAddress(item.address)
        setCategory(item.category)
        setCoordinates(item.coordinates)
    }
   
    const editLocation = (e) => {
        e.preventDefault()
        setShowErrorMsg(true)
        if (name === "" || address === "" || category === 0 || Object.keys(coordinates).length === 0) {
            setErrorMsg("Fill all fields")
        }
        dispatchEditNewLocation()
        setEditing(false)
        setShowErrorMsg(false)
        toaster.success("You've successfully added edited an existing location.")
    }
    const dispatchEditNewLocation = () => {
        dispatch(
            editLocationAction({
                id: ID,
                name: name,
                address: address,
                category: category,
                coordinates: coordinates
            })
        )
    }
    const getLocationMarkers = () => {
        // // retrieve all coordinates from locations & add to markers
        locationState.map(item => {
            return console.log(item.coordinates)
        })
    }
    const showMapCenterPosition = () => {
        if (editing) {
            return { lat: coordinates.lat ? parseFloat(coordinates.lat) : -3.745, lng: coordinates.lng ? parseFloat(coordinates.lng) : -38.523 }
        } else {
            return { lat: locationState.length !== 0 ? locationState[0].coordinates.lat : -3.745, lng: locationState.length !== 0 ? locationState[0].coordinates.lng : -38.523 }
        }
    }
    useEffect(() => {
        getLocationMarkers()
        // console.log(locationState.length)
        document.title = "myLocation | All locations"
      
        return locationState
    })
    return (
        <div className="allLocation_area">
            <div className="topbar">
                <TopBar />
            </div>
            <div className="allLocation_container">
                <div className="allLocation_heading">
                    <h1>My Locations</h1>
                    {/* <div className="filtered_list">
                        <p>Filtered by</p>
                        <select className="select_input" onChange={(e) => setCategory(e.target.value)} placeholder="Select a category" required={true} >
                            <option className="value" value={category !== 0 ? category : "Select category"} hidden={true}>{category}</option>
                            {
                                categoryState.map((item) => {
                                    return (
                                        <option className="item_name" key={item.id} value={(item.name)}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div> */}
                    <div className="allLocation_list">
                        {locationState.length === 0 && <p className="no_location">There are no locations available</p>}
                        {
                            locationState.map((item) => {
                                return (
                                    <div key={item.id} className="list_item">
                                        { locationState.length > 0 &&
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
                                                    <button className="edit-btn" onClick={() => { showEditLocation(item) }}>Edit</button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="location_maps">
                    <h1>Location of Markers</h1>
                    <Maps
                        center={showMapCenterPosition()}
                        zoom={0}
                        onClickAddress={(event) => {  // fires when editing locations to identify new marker position
                            // console.log(event.latLng)
                            if (editing === true) {
                                setCoordinates({
                                    lat: parseFloat(event.latLng.lat()),
                                    lng: parseFloat(event.latLng.lng()),
                                    time: Date.now()
                                })
                                console.log(coordinates)
                            }
                        }}

                    >
                        {editing ?  //show marker location of a particular location when editing 
                            <Marker
                                key={coordinates.time}
                                draggable={true}
                                onDrag={(event) => {
                                    console.log(event)
                                    setCoordinates({
                                        lat: parseFloat(event.latLng.lat()),
                                        lng: parseFloat(event.latLng.lng()),
                                        time: Date.now()
                                    })
                                }}
                                position={{ lat: coordinates.lat, lng: coordinates.lng }}
                            />
                            :
                            <>
                                {locationState.map(item => {
                                    return (
                                        <>
                                            <Marker
                                                key={item.coordinates.time}
                                                position={{ lat: item.coordinates.lat, lng: item.coordinates.lng }}
                                                onClick={() => {
                                                    console.log(item)
                                                    setSelectedMarker(item)
                                                }}
                                            />
                                        </>
                                    )
                                })}
                            </>
                        }

                        {selectedMarker ? (
                            // shows location details on click
                            <InfoWindow
                                position={{ lat: selectedMarker.coordinates.lat, lng: selectedMarker.coordinates.lng }}
                                onCloseClick={() => { setSelectedMarker(null) }}
                            >
                                <div className="location_details">
                                    <p>{selectedMarker.name}</p>
                                    <p>{selectedMarker.address}</p>
                                    <p>{selectedMarker.category}</p>
                                    <p>Created at {moment(selectedMarker.time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                                </div>
                            </InfoWindow>
                        ) : null}
                    </Maps>
                    {/* shows when editing a particular location */}
                    {editing &&
                        <form onSubmit={editLocation} className="form">
                            <div className="row">
                                <input className="input" type="default" placeholder="Enter name of location" autoComplete="false" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                                <input className="input" type="default" placeholder="Enter an address" autoComplete="false" name="address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                            </div>
                            <div className="row">
                                <select className="select_input" onChange={(e) => setCategory(e.target.value)} placeholder="Select a category" required={true} >
                                    <option className="value" value={category !== 0 ? category : ""} hidden={true}>{category}</option>
                                    {
                                        categoryState.map((item) => {
                                            return (
                                                <option key={item.id} value={(item.name)}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <input className="input" type="default" placeholder="Enter coordinates" autoComplete="false" name="coordinates" value={`${coordinates.lat && coordinates.lng !== "" ? `${coordinates.lat},${coordinates.lng}` : "No coordinates"} `} readOnly={true} />
                            </div>
                            {showErrorMsg && <p className="errorMsg">{errorMsg}</p>}
                            <button>Edit this Location</button>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}

export default AllLocations
