import { Switch, Route, useLocation } from 'react-router-dom'
import routes from '../components/BottomBar/BottomBarData'
import { AllLocationsPage, WelcomePage, ErrorPage } from '../pages/index'


function AppRouter() {
    const location = useLocation()
    return (
        <Switch>
            <Switch location={location}>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />
                ))}
                {/* <Switch> */}
                    <Route exact path="/viewLocations">
                        <AllLocationsPage />
                    </Route>

                    <Route exact path="/">
                        <WelcomePage />
                    </Route>
                    <Route exact path="/*">
                        <ErrorPage />
                    </Route>
                {/* </Switch> */}
            </Switch>
        </Switch>
    )
}
export default AppRouter
