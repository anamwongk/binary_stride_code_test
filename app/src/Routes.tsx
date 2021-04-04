import {
    Switch,
    Route
} from "react-router-dom";
import FAQ from "./components/FAQ/FAQ";

const Routes = () => {
    return (<Switch>
        <Route path="/faq">
            <FAQ />
        </Route>
    </Switch>)
}

export default Routes