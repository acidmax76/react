import AppHeader from '../AppHeader/AppHeader';
import {HomePage} from "../../pages/home";
import {LoginPage} from "../../pages/login";
import {RegisterPage} from "../../pages/register";
import {ForgotPassword} from "../../pages/forgot-password";
import {ResetPassword} from "../../pages/reset-password";
import {BrowserRouter as Router, Route} from 'react-router-dom';

export const App = () => {
    return (
        <>
            <AppHeader/>
            <Router>
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
            </Router>
        </>
    );
}
