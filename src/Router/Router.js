import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import routes from '../components/BottomBar/BottomBarData'
import { AllLocationsPage, WelcomePage, ErrorPage } from '../pages/index'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import './router.css'


function AppRouter() {
    const location = useLocation();
    return (
        <React.Suspense fallback={<p></p>}>
            <TransitionGroup>
                <CSSTransition timeout={450} classNames="fade" key={location.key}>
                    <Switch location={location}>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                        <Route path="/viewLocations">
                            <AllLocationsPage />
                        </Route>

                        <Route exact path="/">
                            <WelcomePage />
                        </Route>
                        <Route path="*">
                            <ErrorPage />
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </React.Suspense>

    )
}
export default AppRouter
