import React from 'react'
import './topbar.css'
import { Switch, Route } from 'react-router-dom'
import tabs from '../BottomBar/BottomBarData'

function TopBarComponent() {

    const addLocation = (e) =>{
        e.preventDefault()
    }
    return (
        <div className="topbar_area">
            <div className="container">
                {
                    <Switch>
                        {tabs.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<p className="top_title">{route.title}</p>}
                            />
                        ))}
                    </Switch>
                }
                <div className="action_btn">
                    <a href="/" onClick={addLocation}>Add Location</a>
                </div>
            </div>
        </div>
    )

}

export default TopBarComponent