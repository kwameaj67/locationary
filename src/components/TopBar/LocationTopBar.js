import React from 'react'
import './topbar.css'
import { Switch, Route ,Link} from 'react-router-dom'
import tabs from '../BottomBar/BottomBarData'

const TopBarComponent = () => {
    // console.log("locationTopBar mounted")
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
                    {/* <button type="submit" onClick={props.addLocationFunc}>Add Location</button> */}
                    <Link to="/viewLocations">
                        <button >View Locations</button>
                    </Link>
                </div>
            </div>
        </div>
    )

};

export default React.memo(TopBarComponent);