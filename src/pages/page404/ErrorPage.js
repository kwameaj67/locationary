import React, { useEffect } from 'react'
import './errorPage.css';

const ErrorPage = () => {
    useEffect(() => {
        document.title = "myLocation | Error 404"
    })
    return (
        <div className="page_container">
            <h1>Error 404. Page not found</h1>
            <p>This is not the web page you are looking for.</p>
        </div>
    )
}

export default ErrorPage
