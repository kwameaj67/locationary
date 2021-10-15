import { Switch, Route, useLocation } from 'react-router-dom'
import routes from '../components/BottomBar/BottomBarData'
import { CSSTransition } from "react-transition-group";
import AllLocationPage from '../pages/AllLocation/AllLocations'
import WelcomePage from '../pages/Welcome/Welcome'


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
                            <AllLocationPage />
                        </Route>
                        <Route path="/">
                            <WelcomePage />
                        </Route>
                    </Switch>
                </Switch>
            </Switch>
        </CSSTransition>
    )
}
export default AppRouter
