import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Category,Location} from '../pages/index'


function Router(){
    return(
        <Switch>
            <Route exact="true" path="/category">
                <Category/>
            </Route>
            <Route exact="true" path="/location">
                <Location/>
            </Route>

        </Switch>
    )
}
export default Router
