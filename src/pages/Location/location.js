import React, { useState, useEffect } from 'react';
import './location.css'
import TopBar from '../../components/TopBar/LocationTopBar'
import { useSelector, useDispatch } from 'react-redux'
import Maps from '../../components/Map/Maps'
import { Marker } from '@react-google-maps/api'
import { addLocationAction } from '../../redux/slices/locationSlice'
import { useHistory } from 'react-router-dom'
import { toaster } from 'evergreen-ui'

const LocationPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [category, setCategory] = useState("")
    const [coordinates, setCoordinates] = useState({})
    const [marker, setMarkers] = useState({})
    const [showErrorMsg, setShowErrorMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")


    const categoryState = useSelector((state) => state.categories)


    const addLocation = (e) => {
        e.preventDefault();
        setShowErrorMsg(true)
        if (name === "") {
            setErrorMsg("Enter name of location")
        } else if (address === "") {
            setErrorMsg("Enter name of location address")
        } 
        else if (category === "") {
            setErrorMsg("Select a category")
        } 
        else if (Object.keys(coordinates).length === 0) {
            setErrorMsg("Pick your location from the map provided")
        }
        // else if (Object.keys(marker === 0)) {
        //     setErrorMsg("Pick your location marker")
        // }
         else {
            dispatchNewLocation()
        }

    }
    const dispatchNewLocation = () => {
        dispatch(addLocationAction(
            {
                id: Date.now(),
                name: name,
                address: address,
                coordinates: coordinates,
                category: category,
                completed: true,
            }
        ))
        emptyAllFields()
        toaster.success("You've successfully added a new location.")
        
    }
    const emptyAllFields = () => {
        setName("")
        setAddress("")
        setMarkers({})
        setCoordinates({})
        setCategory("")
        setShowErrorMsg(false)
    }
    const getAllCategories = () => {
        return categoryState
    }
    useEffect(() => {
        document.title = "myLocation | LocationPage"
        getAllCategories()
    })
    const goToViewLocationPage = ()=> {
        history.push("/viewLocations")
    }

    return (
        <div className="location_area">
            <div className="topbar">
                <TopBar addLocationFunc={addLocation} viewLocationFunc={goToViewLocationPage} />
            </div>
            <div className="location_container">
                <div className="location_heading">
                    <h1>New Location</h1>
                    <p>Add new locations of your choice.⚡️</p>
                    <form onSubmit={addLocation}>
                        <input className="input" type="default" placeholder="Enter name of location" autoComplete="false" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <input className="input" type="default" placeholder="Enter an address" autoComplete="false" name="address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                        <input className="input" type="default" placeholder="Enter coordinates" autoComplete="false" name="coordinates" value={`${coordinates.lat && coordinates.lng !== "" ? `${coordinates.lat},${coordinates.lng}` : "No coordinates"} `} readOnly={true} />
                        <select className="select_input" onChange={(e) => setCategory(e.target.value)} placeholder="Select a category" required={true} >
                            <option className="value" value={category !== 0 ? category : ""} hidden={true}>--Select category--</option>
                            {
                                categoryState.map((item) => {
                                    return (
                                        <option key={item.id} value={(item.name)}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                       
                        {showErrorMsg && <p className="errorMsg">{errorMsg}</p>}
                        <button>Add Location</button>
                    </form>
                </div>
                <div className="location_list_container">
                    <h1>Maps of location</h1>
                    <div className="location_maps">
                        <Maps
                             //focuses map on current coordinates
                            center={{ lat: marker.lat ? parseFloat(marker.lat) : -3.745 , lng: marker.lng ? parseFloat(marker.lng) : -38.523 }}  
                            onClickAddress={(event) => {
                                // update marker coordinates
                                console.log(event)
                                setMarkers({
                                    lat: parseFloat(event.latLng.lat()),
                                    lng: parseFloat(event.latLng.lng()),
                                    time: Date.now()
                                })
                                // update input with current coordinates
                                setCoordinates({ lat: parseFloat(event.latLng.lat()), lng: parseFloat(event.latLng.lat()),time:marker.time })  
                                console.log("cordintates"+ coordinates.lat, coordinates.lng)
                            }}
                        >
                            {marker !== {} ?
                                <Marker key={marker.time} position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }} />
                                :
                                null
                                }
                        </Maps>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationPage;