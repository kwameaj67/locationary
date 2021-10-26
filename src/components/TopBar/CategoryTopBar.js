import React from 'react'
import './topbar.css'
import { Switch, Route } from 'react-router-dom'
import tabs from '../BottomBar/BottomBarData'

const  TopBarComponent = ({addCategoryFunc}) => {
    console.log("categoryTopBar mounted")
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
                    <button type="submit" onClick={addCategoryFunc}>Add Category</button>
                </div>
            </div>
        </div>
    )
};

export default React.memo(TopBarComponent)