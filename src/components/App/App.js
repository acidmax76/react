import {AppHeader} from '../AppHeader/AppHeader';
import {HomePage} from "../../pages/home";
import {LoginPage} from "../../pages/login";
import {RegisterPage} from "../../pages/register";
import {ForgotPassword} from "../../pages/forgot-password";
import {ResetPassword} from "../../pages/reset-password";
import {ProfilePage} from "../../pages/profile";
import {IngredientPage} from "../../pages/ingredient";
import {NotFoundPage} from "../../pages/not-found";
import {Route, Switch} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getIngredients} from "../../serivice/App/actions";
import {getUser} from "../../serivice/User/actions";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";

export const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIngredients());
        dispatch(getUser());
    }, [dispatch]);

    return (
        <>
            <AppHeader/>
            <Switch>
                <Route path="/" exact={true}>
                    <HomePage/>
                </Route>
                <Route path="/login" exact={true}>
                    <LoginPage/>
                </Route>
                <Route path="/register" exact={true}>
                    <RegisterPage/>
                </Route>
                <Route path="/forgot-password" exact={true}>
                    <ForgotPassword/>
                </Route>
                <Route path="/reset-password" exact={true}>
                    <ResetPassword/>
                </Route>
                <ProtectedRoute path="/profile" exact={true}>
                    <ProfilePage/>
                </ProtectedRoute>
                <Route path="/ingredient" exact={true}>
                    <IngredientPage/>
                </Route>
                <Route>
                    <NotFoundPage/>
                </Route>
            </Switch>
        </>
    );
}
