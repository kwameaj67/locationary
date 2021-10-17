import { Switch, Route, useLocation } from 'react-router-dom'
import routes from '../components/BottomBar/BottomBarData'
import { CSSTransition } from "react-transition-group";
import { AllLocationsPage,WelcomePage,ErrorPage } from '../pages/index'


function AppRouter() {
    const location = useLocation()
    return (
        <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={500}
        >
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
                    <Switch>
                        <Route path="/viewLocations">
                            <AllLocationsPage />
                        </Route>
                       
                        <Route path="/">
                            <WelcomePage />
                        </Route>
                        {/* <Route path="/*">
                            <ErrorPage/>
                        </Route> */}
                    </Switch>
                </Switch>
            </Switch>
        </CSSTransition>
    )
}
export default AppRouter
