import { Switch, Route,useLocation } from 'react-router-dom'
import routes from '../components/BottomBar/BottomBarData'
import { CSSTransition } from "react-transition-group";


function AppRouter() {
    const location = useLocation()
    return (
        <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={500}
        >
            <Switch location={location}>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />
                ))}
            </Switch>
        </CSSTransition>
    )
}
export default AppRouter
