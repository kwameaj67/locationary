import React from 'react'

const CategoryPage = React.lazy(() => import('./Category/category'))
const LocationPage = React.lazy(() => import('./Location/location'))
const AllLocationsPage = React.lazy(() => import('./AllLocation/AllLocations'))
const WelcomePage = React.lazy(() => import('./Welcome/Welcome'))
const ErrorPage = React.lazy(() => import('./page404/ErrorPage'))

export {
    CategoryPage,
    LocationPage,
    AllLocationsPage,
    WelcomePage,
    ErrorPage
}
