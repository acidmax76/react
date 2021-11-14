import {AppHeader} from '../AppHeader/AppHeader';
import {HomePage} from "../../pages/home/home";
import {LoginPage} from "../../pages/login/login";
import {RegisterPage} from "../../pages/register/register";
import {ForgotPassword} from "../../pages/forgot-password/forgot-password";
import {ResetPassword} from "../../pages/reset-password/reset-password";
import {ProfilePage} from "../../pages/profile/profile";
import {IngredientPage} from "../../pages/ingredient/ingredient";
import {NotFoundPage} from "../../pages/not-found/not-found";
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getIngredients} from "../../serivice/App/actions";
import {getUser} from "../../serivice/User/actions";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import {ILocationState} from "../../serivice/interfaces/ILocationState";
import {OrderSummary} from "../ClientOrderSummary";
import {Feed} from "../../pages/feed/feed";
import {ModalPage} from "../../pages/modal-page/modal-page";

export const App = () => {
    const location = useLocation<ILocationState>();
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIngredients());
        dispatch(getUser());
    }, [dispatch]);
    const action = history.action;
    const background = action==='PUSH' ? location.state && location.state.modal : location;
    return (
        <>
            <AppHeader/>
            <Switch location={background || location}>
                <Route path="/" exact={true}>
                    <HomePage/>
                </Route>
                <Route path="/feed" exact={true}>
                    <Feed />
                </Route>
                <Route path="/feed/:id" exact={true}>
                    <OrderSummary modal={false}/>
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
                <ProtectedRoute path="/profile/orders/:id">
                    <OrderSummary modal={false}/>
                </ProtectedRoute>
                <ProtectedRoute path="/profile">
                    <ProfilePage/>
                </ProtectedRoute>
                <Route path="/ingredients/:id" exact={true}>
                    <IngredientPage modal={false}/>
                </Route>
                <Route>
                    <NotFoundPage/>
                </Route>
            </Switch>
            { background && action === 'PUSH' && 
                    <ModalPage history={history} location={location}/>
            }
        </>
    );
}
