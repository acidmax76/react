import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUser} from "../../serivice/User/selectors";
import {IProtectedRouteProps} from "../../serivice/interfaces/IProtectedRouteProps";

export const ProtectedRoute = ({children,...rest}:IProtectedRouteProps) => {
    const userState = useSelector(getUser);

    return (
        <Route {...rest} render={({location}) =>
            userState.isAuth ?
                (children)
                : (
                    <Redirect to={{pathname: "/login", state: {from: location}}}/>
                )

        }
        />
    );

}