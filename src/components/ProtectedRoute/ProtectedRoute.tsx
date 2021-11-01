import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUser} from "../../serivice/User/selectors";
import {FC} from "react";

type TUser = {
    user: {
        email:string,
        name:string
    },
    isAuth:boolean,
    errorMessage:string,
    resetPassword:boolean
}

export const ProtectedRoute:FC = ({children, ...rest}) => {
    const userState:TUser = useSelector(getUser);
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