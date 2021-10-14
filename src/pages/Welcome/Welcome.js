import React,{useEffect} from 'react'
import './welcome.css'

const WelcomePage = () => {
    useEffect(() => {
        document.title ="myLocation | Welome"
    })
    return (
        <div className="welcome_container">
            <h1>Welcome to myLocations</h1>
            <p>An app that organizes categorizes name locations</p>
        </div>
    )
}

export default WelcomePage
