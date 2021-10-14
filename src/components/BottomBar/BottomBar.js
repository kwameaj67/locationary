import React from 'react'
import { Link } from 'react-router-dom'
import bottomBarRoutes from './BottomBarData'
import './bottomBar.css'

function BottomBarComponent() {
    return (
        <div className="bottom_bar">
            <ul>
                {
                    bottomBarRoutes.map((value, key) => {
                        return (
                            <div className="bar_row" key={key}>
                                <Link to={value.path} style={{ textDecoration: 'none' }}>
                                    <li>
                                        <div key={key} className="item">
                                            <div className="icon">{value.icon}</div>
                                            <div>
                                                <p className="bar_title">{value.title}</p>
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default BottomBarComponent





// type rafce for boilerPlate 