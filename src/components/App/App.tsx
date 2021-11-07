import {AppHeader} from '../AppHeader/AppHeader';
import {HomePage} from "../../pages/home";
import {LoginPage} from "../../pages/login";
import {RegisterPage} from "../../pages/register";
import {ForgotPassword} from "../../pages/forgot-password";
import {ResetPassword} from "../../pages/reset-password";
import {ProfilePage} from "../../pages/profile";
import {IngredientPage} from "../../pages/ingredient";
import {NotFoundPage} from "../../pages/not-found";
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getIngredients} from "../../serivice/App/actions";
import {getUser} from "../../serivice/User/actions";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import {Modal} from "../Modal/Modal";
import {ILocationState} from "../../serivice/interfaces/ILocationState";
import {Dispatch} from "redux";

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
            <Route path={"/ingredients/:id"}
                   children={
                <Modal header={'Детали ингредиента'} onClose={()=>{history.goBack()}}>
                <IngredientPage modal={true}/>
                </Modal>}
            />
            }
        </>
    );
}